<script>
	import { browser } from "$app/environment"
	import { api } from "$lib/api/api"
	import { planetData } from "$lib/data/planets"
	import { secondsToDaysWithHours } from "$lib/utils/datetime"
  import { onDestroy, onMount } from "svelte"
	import LocateOnMap from "./LocateOnMap.svelte";

  let loading = true
  let majorOrders = []
  let interval

  onMount(() => {
    if (browser) interval = setInterval(get, 120000)
    get()
  })

  onDestroy(() => {
    if (interval) clearInterval(interval)
  })

  async function get() {
    loading = true

    try {
      const data = await api(`war/major-orders`)

      if (!data?.filter(n => n.message)) return

      majorOrders = data
    } catch {
      // ignore
    } finally {
      loading = false
    }
  }
</script>

{#if majorOrders?.length}
  <div class="items">
    {#each majorOrders as { setting, expiresIn }}
      <div class="item">
        <h5>
          {setting.taskDescription}

          <div class="time">{secondsToDaysWithHours(expiresIn)}</div>
        </h5>

        <p>{setting.overrideBrief}</p>
        <p class="light"></p>

        {#if setting.tasks?.length}
          <div class="tasks">
            {#each setting.tasks as { type, values }}
              <div class="task">
                {#if type === 11}
                  <LocateOnMap planetIndex={values[2]} />
                  {planetData[values[2]]?.name}
                {/if}
              </div>
            {/each}
          </div>
        {/if}

        <div class="reward">
          Reward:

          <strong>
            {setting.reward.amount}
            {#if setting.reward.type === 1}
              Medals
            {/if}
          </strong>
        </div>
      </div>
    {/each}
  </div>
{:else if loading}
  Loading...
{:else}
  <em>There are currently no Major Orders. Stand by for further instructions.</em>
{/if}

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
  }

  .item {
    max-width: $text-limit;
    padding: $margin * 0.25;
    margin: 0;
    border: 5px solid $super-earth;
    background: rgba($super-earth, 0.1);
    line-height: 1.45em;

    @include breakpoint(md) {
      font-size: 1.15rem;
    }

    h5 {
      display: flex;
      justify-content: space-between;
      gap: $margin * 0.5;
      padding: $margin * 0.25;
      margin: $margin * -0.25 $margin * -0.25 $margin * 0.25;
      background: rgba($super-earth, 0.5);
      color: $white;
    }
  }

  .tasks {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.15;
    margin: $margin * 0.25 0;
  }

  .task {
    width: 100%;
    max-width: 20rem;
    padding: $margin * 0.15 $margin * 0.25;
    border-left: 5px solid $super-earth;
    background: linear-gradient(to right, rgba($super-earth, 0.1), transparent);
    color: $white;
    font-weight: bold;
    font-family: $font-family-brand;
    font-size: 1.25rem;
    line-height: 1.35em;
  }

  .light {
    color: $white;
    font-weight: bold;
  }

  .reward {
    padding: $margin * 0.25;
    margin-top: $margin * 0.25;
    background: repeating-linear-gradient(45deg, rgba($super-earth, 0.2), rgba($super-earth, 0.2) 4px, transparent 4px, transparent 0.75rem);
    font-family: $font-family-brand;
    font-size: 1.5rem;
    text-align: center;
    color: $white;

    strong {
      color: $primary;
    }
  }

  .time {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: $margin * -0.25;
    padding: $margin * 0.15 $margin * 0.25;
    background: $white;
    color: $super-earth;
    white-space: nowrap;
  }
</style>
