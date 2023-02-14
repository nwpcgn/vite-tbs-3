<script>
  import {GridRow , BitcoinSvg} from '../';
  import { _op } from '../../data';
  import { onMount } from "svelte";
  export let curr1;
  export let curr2;
  export let fac1;
  export let fac2;
  export let w1;
  export let w2;
  const favorite = [
    {
      "name": "Bahraini Dinar",
      "code": "bhd",
      "symbol": ".د.ب",
      "id": 1
    },
    {
      "name": "British Pound Sterling",
      "code": "gbp",
      "symbol": "£",
      "id": 2
    },
    {
      "name": "Canadian Dollar",
      "code": "cad",
      "symbol": "$",
      "id": 3
    },
    {
      "name": "Cayman Islands Dollar",
      "code": "kyd",
      "symbol": "$",
      "id": 4
    },
    {
      "name": "Euro",
      "code": "eur",
      "symbol": "€",
      "id": 5
    },
    {
      "name": "Jordanian Dinar",
      "code": "jod",
      "symbol": "ا.د",
      "id": 6
    },
    {
      "name": "Kuwaiti Dinar",
      "code": "kwd",
      "symbol": "ك.د",
      "id": 7
    },
    {
      "name": "Omani Rial",
      "code": "omr",
      "symbol": ".ع.ر",
      "id": 8
    },
    {
      "name": "Swiss Franc",
      "code": "chf",
      "symbol": "CHf",
      "id": 9
    },
    {
      "name": "US Dollar",
      "code": "usd",
      "symbol": "$",
      "id": 10
    }
  ];

  const update = async () => {
    let res = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr1}.json`
    );
    let d = await res.json();
    let f0 = Object.entries(d);
    let f1 = f0.find((el) => el[0] === curr1);
    let f2 = Object.entries(f1[1]);
    let f3 = f2.find((el) => el[0] === curr2);
    fac1 = 1;
    fac2 = f3[1];
    w2 = parseInt(w1) * fac2;
  };
  const getData = async () => {
    // let res = await fetch(
    //   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    // );
    // let d = await res.json();
    // daten = Object.entries(d);
    update();
  };
  onMount(() => {
    getData();
  });
  $: size1 = `${$_op.op1.size}px`;
</script>

<section {...$$restProps}>
  <GridRow>
    <svelte:fragment slot="left">
      <select 
        class="form-select {!$_op.op1.rounded ? 'rounded-0' : ''}" 
        class:form-select-lg={$_op.op1.lg}
        bind:value={curr1} 
        on:change={update}> 
        {#each favorite as {name, code, symbol}, i}
          <option value={code}>{symbol} {name}</option>
        {:else}
          <option selected>... loading</option>
        {/each}
      </select>
    </svelte:fragment>
    <svelte:fragment slot="divider">
      <span class="{$_op.op1.sec ? 'text-primary' : 'text-secondary'}">
        <BitcoinSvg size={size1} />
      </span>
    </svelte:fragment>
    <svelte:fragment slot="right">
      <select class="form-select {!$_op.op1.rounded ? 'rounded-0' : ''}"
      class:form-select-lg={$_op.op1.lg}
      bind:value={curr2}
      on:change={update}
    >
    {#each favorite as {name, code, symbol}, i}
    <option value={code}>{name} {symbol}</option>
      {:else}
        <option selected>... loading</option>
      {/each}
    </select>
    </svelte:fragment>
  </GridRow>
</section>

