<script>
  import Header from "./_components/Header.svelte";
  import Spinner from "./_components/Spinner.svelte";
  import { sleep } from "../lib/data";
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faComment,
    faBook,
    faMicrophone,
    faCalendar,
    faBookOpen,
  } from "@fortawesome/free-solid-svg-icons";
  export let params = {};
  const fetchData = async () => {
    try {
      let res = await fetch("./data/hdr.json");
      let d = await res.json();
      if (d) {
        return d;
      } else {
        throw new Error();
      }
    } catch (error) {
      alert(error);
    }
  };

  const setData = async (id = 1) => {
    await sleep(800);
    let data = await fetchData();
    let res = data.filter((x) => x.b_id == id);
    return res;
  };

  let promise = setData();

  $: if (params && params.book) {
    promise = setData(params.book);
  }
</script>

<div class="container-lg py-4">
  {#await promise}
    <Spinner />
  {:then data}
    <Header bind:book_id={params.book}>
      {data[0].buch}
    </Header>
    {#each data as d}
      <div class="row g-2">
        <div class="col">
          <article>
            <header
              class="d-flex w-100 justify-content-between align-items-start"
            >
              <div>
                <h1 class="mb-1">
                  <span style="opacity: 0.9;">
                    <Fa icon={faMicrophone} fw />
                  </span>
                  <span>{d.titel}</span>
                </h1>
              </div>
              <span class="badge text-bg-info fs-6">Folge {d.id}</span>
            </header>
            <div class="px-2">
              <h5 class="mb-1">
                <Fa icon={faComment} fw /> <em>{d.name}</em>
              </h5>
              <p class="mb-1"><Fa icon={faBook} fw /> {d.buch}</p>
              <p class="mb-1">
                <small>{d.inhalt}</small>
              </p>
            </div>
          </article>
        </div>
      </div>
    {/each}
  {/await}
</div>
