<script>
    import FlexRow from "../bs/FlexRow.svelte";
    import { onMount } from "svelte";
    import { _op } from "../../data";
    import toggleTheme from "../bs/toggelTheme";
    let op1 = {
      lg: false,
      sec: false,
      rounded: false,
      size: 46,
    };
    let op2 = {
      lg: false,
      sec: false,
      rounded: false,
      size: 46,
    };
    let op3 = {
      dark: false,
      sec: false,
      size: 28,
    };
    const update = () => {
      $_op.op1 = op1;
      $_op.op2 = op2;
      $_op.op3 = op3;
    };
    onMount(() => {
      op1 = $_op.op1;
      op2 = $_op.op2;
      op3 = $_op.op3;
    });
  </script>
  
  <hr />
  <div class="py-2">
    <h4 class="mb-3">Option & Settings</h4>
    <ul class="list-group list-group-flush-x">
      <li class="list-group-item list-group-item-secondary fs-5">Application</li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Dark Mode</span>
          <svelte:fragment slot="right">
            <label for="op31" class="form-check form-switch">
              <input
                class="form-check-input"
                bind:checked={op3.dark}
                on:change={(e) => {
                  toggleTheme();
                  update();
                }}
                type="checkbox"
                role="switch"
                id="op31"
              />
              <span class="form-check-label" />
            </label>
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Basic Icon Size</span>
          <svelte:fragment slot="right">
            <input
              type="text"
              value="{op3.size} px"
              class="form-control text-center rounded-1"
              disabled
              size="2"
            />
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item pt-3">
        <input
          type="range"
          value={op3.size}
          on:change={(e) => {
            op3.size = parseInt(e.currentTarget.value);
          }}
          min="18"
          max="60"
          class="form-range"
        />
      </li>
      <button
        on:click={update}
        class="list-group-item list-group-item-action bg-primary text-bg-primary text-center"
      >
        Save
      </button>
      <li class="list-group-item list-group-item-secondary fs-5">Topbar</li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Large Elements</span>
          <svelte:fragment slot="right">
            <label for="op11" class="form-check form-switch">
              <input
                class="form-check-input"
                bind:checked={op1.lg}
                type="checkbox"
                role="switch"
                id="op11"
              />
              <span class="form-check-label" />
            </label>
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Rounded Elements</span>
          <svelte:fragment slot="right">
            <label for="op11" class="form-check form-switch">
              <input
                class="form-check-input"
                bind:checked={op1.rounded}
                type="checkbox"
                role="switch"
                id="op11"
              />
              <span class="form-check-label" />
            </label>
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Icon Secondary</span>
          <svelte:fragment slot="right">
            <label for="op11" class="form-check form-switch">
              <input
                class="form-check-input"
                bind:checked={op1.sec}
                type="checkbox"
                role="switch"
                id="op11"
              />
              <span class="form-check-label" />
            </label>
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Icon Size</span>
          <svelte:fragment slot="right">
            <input
              type="text"
              value="{op1.size} px"
              class="form-control text-center rounded-1"
              disabled
              size="2"
            />
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item pt-3">
        <input
          type="range"
          value={op1.size}
          on:change={(e) => {
            op1.size = parseInt(e.currentTarget.value);
          }}
          min="18"
          max="60"
          class="form-range"
        />
      </li>
      <button
        on:click={update}
        class="list-group-item list-group-item-action bg-primary text-bg-primary text-center"
      >
        Save
      </button>
      <li class="list-group-item list-group-item-secondary fs-5">Body</li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Large Elements</span>
          <svelte:fragment slot="right">
            <label for="op11" class="form-check form-switch">
              <input
                class="form-check-input"
                bind:checked={op2.lg}
                type="checkbox"
                role="switch"
                id="op21"
              />
              <span class="form-check-label" />
            </label>
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Rounded Elements</span>
          <svelte:fragment slot="right">
            <label for="op21" class="form-check form-switch">
              <input
                class="form-check-input"
                bind:checked={op2.rounded}
                type="checkbox"
                role="switch"
                id="op21"
              />
              <span class="form-check-label" />
            </label>
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Icon Secondary</span>
          <svelte:fragment slot="right">
            <label for="op21" class="form-check form-switch">
              <input
                class="form-check-input"
                bind:checked={op2.sec}
                type="checkbox"
                role="switch"
                id="op21"
              />
              <span class="form-check-label" />
            </label>
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item">
        <FlexRow>
          <span class="fs-6">Icon Size</span>
          <svelte:fragment slot="right">
            <input
              type="text"
              value="{op2.size} px"
              class="form-control text-center rounded-1"
              disabled
              size="2"
            />
          </svelte:fragment>
        </FlexRow>
      </li>
      <li class="list-group-item pt-3">
        <input
          type="range"
          value={op2.size}
          on:change={(e) => {
            op2.size = parseInt(e.currentTarget.value);
          }}
          min="18"
          max="60"
          class="form-range"
        />
      </li>
      <button
        on:click={update}
        class="list-group-item list-group-item-action bg-primary text-bg-primary text-center"
      >
        Save
      </button>
    </ul>
  
    <div class="p-4" />
  </div>
  