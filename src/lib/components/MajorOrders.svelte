<script>
	import { browser } from "$app/environment"
	import { api } from "$lib/api/api"
	import { planetData } from "$lib/data/planets"
	import { secondsToDaysWithHours } from "$lib/utils/datetime"
  import { onDestroy, onMount } from "svelte"
	import LocateOnMap from "$lib/components/LocateOnMap.svelte"

  export let majorOrdersPlanetIndexes = []

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

      console.log(data)

      majorOrders = data
      majorOrdersPlanetIndexes = (majorOrders?.map(o => o.setting?.tasks?.map(t => t.values[2])) || []).flat()
    } catch {
      // ignore
    } finally {
      loading = false
    }
  }
</script>

{#if majorOrders?.length}
  <div class="items">
    {#each majorOrders as { setting, expiresIn, progress }}
      <div class="item">
        <h5>
          {setting.taskDescription}

          <div class="time">{secondsToDaysWithHours(expiresIn)}</div>
        </h5>

        <p>{setting.overrideBrief}</p>
        <p class="light"></p>

        {#if setting.tasks?.length}
          <div class="tasks">
            {#each setting.tasks as { type, values }, index}
              <div class="task" class:incomplete={(progress && progress[index] === 0) || (progress && values[2] && progress < values[2])} class:block={type === 3}>
                {#if type === 3}
                  {(progress || 0).toLocaleString()} / {(values[2] || 0).toLocaleString()}

                  <div class="bar">
                    <div class="progress" style:width="{100 / values[2] * progress}px" />
                  </div>
                {/if}

                {#if type === 11 || type === 13}
                  <div>
                    <LocateOnMap planetIndex={values[2]} />
                    {planetData[values[2]]?.name}
                  </div>

                  {#if progress && progress[index] === 1}
                    <small>Controlled</small>
                  {:else if progress}
                    <small>Incomplete</small>
                  {/if}
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
    color: $super-earth;

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
    display: grid;
    gap: $margin * 0.15;
    margin: $margin * 0.25 0;

    @include breakpoint(sm) {
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    }
  }

  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $margin * 0.25;
    width: 100%;
    padding: $margin * 0.15 $margin * 0.25;
    border-left: 5px solid $super-earth;
    background: linear-gradient(to right, rgba($super-earth, 0.1), transparent);
    color: $white;
    font-weight: bold;
    font-family: $font-family-brand;
    font-size: 1.25rem;
    line-height: 1.35em;

    &.incomplete {
      background: linear-gradient(to right, rgba($red, 0.1), transparent);
      border-color: $red;

      small {
        color: $red;
      }
    }

    &.block {
      display: block;
    }

    small {
      color: $super-earth;
      opacity: 0.75;
      font-weight: normal;
      font-size: 0.85rem;
      line-height: 1em;
    }
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

  .bar {
    flex: 0 0 auto;
    position: relative;
    height: 0.75rem;
    background: rgba($super-earth, 0.5);
    margin: $margin * 0.15 0 0;

    .incomplete & {
      background: rgba($red, 0.25);
    }
  }

  .progress {
    background: $super-earth;
    height: 100%;

    .incomplete & {
      background: $red;
    }
  }
</style>
