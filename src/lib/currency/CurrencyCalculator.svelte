<script>
  import {GridRow, AccountSvg} from '../';
  import { _op } from '../data';
  export let curr1;
  export let curr2;
  export let fac2;
  export let w1;
  export let w2;
  $: size2 = `${$_op.op2.size}px`;
</script>

<section {...$$restProps}>
  <GridRow>
    <svelte:fragment slot="left">
        <div 
        class="input-group {!$_op.op2.rounded ? 'rounded-0' : ''}" 
        class:input-group-lg={$_op.op2.lg}>
            <input bind:value={w1} on:change={(e)=> { w2 = parseInt(w1) * fac2; }} type="text" class="form-control {!$_op.op2.rounded ? 'rounded-0' : ''}" /> <span class="input-group-text text-capitalize {$_op.op2.rounded ? '' : 'rounded-0'}">{curr1}</span>
        </div>
    </svelte:fragment>
    <svelte:fragment slot="divider">
      
      <span class="{$_op.op2.sec ? 'text-primary' : 'text-secondary'}">

        <AccountSvg size={size2} />

      </span>


    </svelte:fragment>
    <svelte:fragment slot="right">
        <div class="input-group {$_op.op2.rounded ? '' : 'rounded-0'}" 
          class:input-group-lg={$_op.op2.lg}>
            <input bind:value={w2} type="text" class="form-control {$_op.op2.rounded ? '' : 'rounded-0'}" />
            <span class="input-group-text text-capitalize {$_op.op2.rounded ? '' : 'rounded-0'}">{curr2}</span>
        </div>
    </svelte:fragment>
  </GridRow>
</section>
