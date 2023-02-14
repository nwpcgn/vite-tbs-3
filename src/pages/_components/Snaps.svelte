<script>
  // no js
</script>

<main class="slide-container">
  <slot />
</main>

<style>
  .slide-container {
    --slide-height: calc(100vh - 56px);
    flex: 1;
    position: relative;

    width: 100%;
    min-height: var(--slide-height);
    background: transparent;
    margin: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    display: flex;
    flex-direction: column;
  }
  :global(.slide-container::-webkit-scrollbar) {
    opacity: 0.1;
  }
</style>
