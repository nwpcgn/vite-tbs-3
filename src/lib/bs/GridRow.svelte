<section {...$$restProps}>
  <div class="d-flex flex-column flex-md-row align-items-center">
    <div class="w-100">
      <slot name="left" />
    </div>
    {#if $$slots.divider}
      <div
        class="align-items-center d-inline-flex justify-content-center pb-2
        pb-md-0 pe-3 ps-3 pt-2 pt-md-0">
        <slot name="divider" />
      </div>
    {:else}
      <div class="p-2" />
    {/if}
    <div class="w-100">
      <slot name="right" />
    </div>
  </div>
</section>
