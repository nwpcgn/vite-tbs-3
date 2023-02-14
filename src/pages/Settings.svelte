<script>
  import DocsBs from "../lib/bs/DocsBs.md";
  import Options from "./_components/Options.svelte";
  import Router from "svelte-spa-router";
  const prefix = "/settings";
  const routes = {
    "/": Options
  };
</script>

<main>
  <Router {routes} {prefix} />
</main>
<!-- <footer>
  <div class="container">
    <nav class="nav justify-content-center">

      <a class="nav-link" href="#/settings/">Settings</a>

      <a class="nav-link" href="#/settings/docs/">Docs</a>

    </nav>
  </div>
</footer> -->
