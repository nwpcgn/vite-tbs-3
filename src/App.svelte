<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faCog, faMicrophone, faHome } from "@fortawesome/free-solid-svg-icons";
  import { setTheme, _options } from "./pages/_components/options";
  import Router, { location } from "svelte-spa-router";
  import routes from "./pages/routes";
  import { onMount } from "svelte";
  const title = "nwp-hdr";
  onMount(() => {
    setTheme($_options.op1);
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<nav class="navbar navbar-dark bg-dark navbar-expand sticky-top shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"> HERR DER RINGE </a>
    <div id="navcol-1" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" class:active={$location === "/"} href="#/">
            <Fa icon={faHome} size="lg" fw />
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            class:active={$location.includes("/hsp")}
            href="#/hsp/"
          >
            <Fa icon={faMicrophone} size="lg" fw />
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            class:active={$location.includes("/settings")}
            href="#/settings/"
          >
            <Fa icon={faCog} size="lg" fw />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Router {routes} />
