<header {...$$restProps}>
  <span>
    <slot></slot>
  </span>
  <span>
    <slot name="right"></slot>
  </span>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

