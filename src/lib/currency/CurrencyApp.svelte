<script>
	import GridRow from '../bs/GridRow.svelte';
  import {FlexRow, CurrencyCalculator, CurrencySelect, Spacer} from '../';
  let curr1 = "eur";
  let curr2 = "usd";
  let fac1;
  let fac2;
  let w1 = 1;
  let w2 = 1;
</script>

<Spacer space={3} />
<FlexRow>
  <h4>Auswahl</h4>
</FlexRow>
<CurrencySelect
  class="py-2"
  bind:curr1
  bind:curr2
  bind:w1
  bind:w2
  bind:fac1
  bind:fac2
/>
<Spacer space={3} />
<FlexRow>
  <h4>Rechner</h4>
</FlexRow>
<CurrencyCalculator
  class="py-2"
  bind:curr1
  bind:curr2
  bind:w1
  bind:w2
  bind:fac2
/>

<Spacer space={3} />

<GridRow>
  <svelte:fragment slot="left">
    
  </svelte:fragment>
  <svelte:fragment slot="divider">

  </svelte:fragment>
  <svelte:fragment slot="right">

  </svelte:fragment>
</GridRow>
