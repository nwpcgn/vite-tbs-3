---
title: NWP-Docs
---


## BS5 Grid-Row

```svelte
<script>
	import GridRow from '../lib/components/bs/GridRow.svelte';
 </script>

<GridRow>
  <svelte:fragment slot="left">
    
  </svelte:fragment>
  <svelte:fragment slot="divider">

  </svelte:fragment>
  <svelte:fragment slot="right">

  </svelte:fragment>
</GridRow>
```


## BS5 Flex-Row

```svelte
<script>
	import FlexRow from '../lib/components/bs/FlexRow.svelte';
 </script>

<FlexRow>
  <!-- <h4>Auswahl</h4> -->
  <svelte:fragment slot="right">

  </svelte:fragment>
</FlexRow>
```

## BS5 Collapse

```html
<script>
  import Collapse from "./lib/components/bs/Collapse.svelte";
</script>

<Collapse>
  <svelte:fragment slot="trigger" let:open let:toggle>
    <button type="button" class="btn btn-primary" on:click={toggle}>Trigger</button>
  </svelte:fragment>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
      similique, ipsum expedita officia quae nemo eius autem mollitia nam,
      eveniet qui modi ratione excepturi aperiam asperiores eum magnam sed
      fuga!
    </p>
  </div>
</Collapse>
```


## BS5 Radio-List

```html
<script>
  import RadioList from "./lib/components/bs/RadioList.svelte";
  const img_path = "https://nwp-cgn.de/img/flags/";
  const data = [
    {
      titel: "Bahraini Dinar",
      value: "bhd",
      body: ".د.ب",
      img: "BH.svg",
      path: img_path,
      id: 1,
    }
  ];
  const onChange = (e) => {
    console.log("Changed", e.detail);
    // e.detail = selected value
  };
</script>

<RadioList {data} on:changed={onChange} />
```