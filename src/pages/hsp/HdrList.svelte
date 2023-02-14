<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faFilm, faComment, faBook, faMicrophone } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from "svelte";
  import { supabase } from "../../lib/data";
  import Loader from "../../lib/bs/Loader.svelte";
  const label = "HspList: fetch(hsp_lib)";
  export let hid;
  let filter = {
    db: "hdr_ep",
    select: "b_id,buch,id,h_id,name,titel,inhalt,audio_link",
    query_col: "h_id",
    order_col: "id",
    asc: true,
    id: false,
  };

  const fetchAllData = async (filter) => {
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
  const fetchData = async (filter) => {
    filter.id = hid;
    let d = await fetchAllData(filter);
    console.log("FetchData", d);
    return d;
  };
  const sort = () => {
    filter.asc = !filter.asc;
    fetchData(filter);
  };
  let promise = fetchData(filter);

  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mount!`);
  });
  $: if (hid) {
    console.log("HID", hid);
    filter.id = hid;
    fetchData(filter);
  }
</script>

{#await promise}
  <Loader />
{:then data}
    <slot data={data}>
      <div class="row g-2">
        <!-- <div class="col-4"><img src={d.img_url} alt={d.hoerspiel} class="img-fluid"></div> -->
        <div class="col ps-2">
          <div class="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h1 class="mb-1">
                <span class="text-secondary" style="opacity: 0.5;">
                  <Fa icon={faMicrophone} fw />
                </span>
                <span>{d.titel}</span>
              </h1>
            </div>
            <span class="badge text-bg-secondary">Folge {d.id}</span>
          </div>
          <div class="px-2">
            <h5 class="mb-1"><Fa icon={faComment} fw /> <em>{d.name}</em></h5>
            <p class="mb-1"><Fa icon={faBook} fw /> {d.buch}</p>
            <p class="mb-1">
              <small>{d.inhalt}</small>
            </p>
          </div>
          <div class="px-2 py-2">
            <button type="button" class="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </slot>
{/await}
