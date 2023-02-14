<script>
  import { addToast } from "./store";
  let message = "Toast Notification!";
  let types = ["success", "error", "info"];
  let type = "info";
  let dismissible = true;
  let timeout = 2000;
// import Toasts from "./Toasts.svelte";
</script>

<!-- <Toasts /> -->
<div class="card my-5">
  <h4 class="card-header">Tost Demo</h4>
  <div class="card-body">
    
    <form on:submit|preventDefault>
            <div class="mb-2">
              <label class="form-label">
                Message:</label>
                <input class="form-control" bind:value={message} />
              
            </div>
            <div class="mb-2">
              <label class="form-label">
                Timeout:</label>
                <input class="form-control" bind:value={timeout} type="number" />
              
            </div>
            <div class="mb-2">
              <label class="form-label">
                Type:</label>
                <select class="form-control" bind:value={type}>
                  {#each types as type}
                    <option value={type}>{type}</option>
                  {/each}
                </select>
              
            </div>
            <div class="mb-2">
              <div class="form-check">
                <input class="form-check-input" bind:checked={dismissible} type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Dismissible?
                </label>
              </div>
              
            </div>
            <div class="py-2">
            <button
              on:click={() => addToast({ message, type, dismissible, timeout })}
              class="btn btn-secondary"
            >
              Add toast
            </button>
          </div>
    </form>
  </div>
</div>
