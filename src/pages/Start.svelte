<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faFilm,
    faPlay,
    faCalendar,
    faMicrophone,
    faChevronDown,
    faChevronUp,
    faBookOpen,
    faAngleDoubleUp,
  } from "@fortawesome/free-solid-svg-icons";
  import Snap from "./_components/Snap.svelte";
  import Snaps from "./_components/Snaps.svelte";
  import apiD from "./hsp/apiData";
  let slide1, slide2;
  const changeSlide = (elem) => {
    elem.scrollIntoView({ behavior: "smooth", block: "center" });
  };
</script>

<Snaps>
  <Snap bind:slide={slide1} bg="./img/hdr/bg-lotr.jpg" hero>
    <div class="py-4 px-4">
      <div class="d-grid gap-2">
        <h1 class="text-light">{apiD.hoerspiel}</h1>
      </div>
    </div>
    <svelte:fragment slot="footer">
      <button
        title="Scroll Down"
        class="blank text-light"
        type="button"
        on:click={changeSlide(slide2)}
      >
        <Fa icon={faChevronDown} />
      </button>
    </svelte:fragment>
  </Snap>
  <Snap bind:slide={slide2} hero>
    <svelte:fragment slot="header">
      <button
        title="Scroll Up"
        class="blank"
        type="button"
        on:click={changeSlide(slide1)}
      >
        <Fa icon={faChevronUp} />
      </button>
    </svelte:fragment>
    <div class="container-lg py-4">
      <div class="row g-2">
        <div class="col">
          <header
            class="d-flex w-100 justify-content-between align-items-start"
          >
            <div>
              <h1 class="display-4 mb-2">
                <span class="text-secondary" style="opacity: 0.5;">
                  <Fa icon={faMicrophone} fw />
                </span>
                <span>{apiD.hoerspiel}</span>
              </h1>
            </div>
            <!-- <span class="badge text-bg-secondary">{apiD.h_id}</span> -->
          </header>
          <div class="px-3 text-start">
            <h5 class="mb-3 fs-2">by <em>{apiD.autor}</em></h5>
            <p class="mb-1"><Fa icon={faFilm} fw /> {apiD.regie}</p>
            <p class="mb-1"><Fa icon={faPlay} fw /> {apiD.produktion}</p>
            <p class="mb-1">
              <Fa icon={faCalendar} fw />
              {apiD.veroeffentlicht}
            </p>
            <p class="mb-1">
              <em>{apiD.info}</em>
            </p>
            <div class="d-gridx gap-2 py-4">
            <a href="#/hsp/" class="btn btn-primary btn-lg">
              <Fa icon={faMicrophone} fw />
              Hoerspiele
            </a>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </Snap>
</Snaps>

<style lang="scss" global>
  $hero-size: calc(100vh - 56px);
  $card-imge-height: 200px;
  $card-imge-width: 180px;

  :global(.hero) {
    width: 100%;
    height: 100%;
    max-height: $hero-size;
  }
  :global(.img-hero) {
    display: block;
    width: 100%;
    height: 100%;
    max-height: $hero-size;
    object-fit: cover;
  }
  :global(button.blank) {
    display: block;
    width: 100%;
    background-color: transparent;
    border: 0;
    padding: 0.5rem;
  }
</style>
