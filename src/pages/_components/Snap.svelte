<script>
  export let hero;
  export let bg;
  export let slide;
</script>

<div class="slide" class:hero={hero} style="{bg ? `background-image: url(${bg});` : ''}" bind:this={slide}>
  {#if $$slots.header}  
    <nav class="slide-nav top">
      <slot name="header"><!-- optional fallback --></slot>
    </nav>
  {/if}
  <slot />
  {#if $$slots.footer}  
    <nav class="slide-nav bottom">
      <slot name="footer"><!-- optional fallback --></slot>
    </nav>
  {/if}
</div>

<style lang="scss">
  .slide {
    --slide-height: calc(100vh - 56px);
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: var(--slide-height);
    scroll-snap-align: start;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    &.hero {
      align-items: center;
      justify-content: center;
    }
  }
  .slide-container::-webkit-scrollbar {
    opacity: 0.1;
  }
  .slide-nav {
    position: absolute;
    width: 100%;
    left: 0;
    &.top {
      top: 0;
    }
    &.bottom {
      bottom: 0;
    }
    button {
      display: block;
      width: 100%;
      background-color: transparent;
      border: 0;
      padding: 0.5rem;
    }
  }
</style>
