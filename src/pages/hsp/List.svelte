<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faFilm, faPlay, faCalendar, faMicrophone } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from "svelte";
  import { supabase } from "../../lib/data";
  import Loader from "../../lib/bs/Loader.svelte";
  const label = "HspList: fetch(hsp_lib)";

  let filter = {
    db: "hsp_lib",
    select: "h_id,hoerspiel,autor,regie,produktion,veroeffentlicht,img_url,info",
    query_col: "h_id",
    order_col: "h_id",
    asc: true,
    id: false
  };

  const fetchAllData = async () => {
    let fS = filter;
    let query = supabase
      .from(fS.db)
      .select(fS.select);
    if (fS && fS.id) {
      query = query.eq(fS.query_col, fS.id);
    }

    query = query.order(fS.order_col, {
      ascending: fS.asc ? fS.asc : false,
    });

    let { data, error } = await query;
    if (data) {
      return data;
    } else {
      throw new Error(error, data);
    }
  };
  const fetchData = async () => {
    let d = await fetchAllData();
    console.log("FetchData", d);
    return d;
  };
  const sort = () => {
    filter.asc = !filter.asc;
    fetchData();
  };
  let promise = fetchData();

</script>

{#await promise}
  <Loader />
{:then data}
    <!-- {h_id,info,hoerspiel,autor,regie,produktion,veroeffentlicht,img_url} -->
    {#each data as d, i}
    <div class="row g-2">
        <!-- <div class="col-4">
            <img src={d.img_url} alt={d.hoerspiel} class="img-fluid">
        </div> -->
        <div class="col">
            <div class="d-flex w-100 justify-content-between align-items-start">
                <div>
                    <h1 class="mb-1">
                        <span class="text-secondary" style="opacity: 0.5;">
                            <Fa icon={faMicrophone} fw />
                        </span>
                        <span>{d.hoerspiel}</span>
                    </h1>  
                </div>
                <!-- <span class="badge text-bg-secondary">{d.h_id}</span> -->
            </div>
            <div class="px-2">
                <h5 class="mb-1">by <em>{d.autor}</em></h5>
                <p class="mb-1"><Fa icon={faFilm} fw /> {d.regie}</p>
                <p class="mb-1"><Fa icon={faPlay} fw /> {d.produktion}</p>
                <p class="mb-1"><Fa icon={faCalendar} fw /> {d.veroeffentlicht}</p>
                <p class="mb-1">
                    <small>{d.info}</small>
                </p>  
            </div>
            <div class="px-2 py-2">
                <a href="#/hsp/{d.h_id}/" type="button" class="btn btn-primary">Button</a>
            </div>
        </div>
    </div>
    {/each}
{/await}
