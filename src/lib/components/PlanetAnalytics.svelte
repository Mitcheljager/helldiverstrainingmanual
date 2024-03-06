<script>
  import { LinkedChart, LinkedLabel, LinkedValue } from "svelte-tiny-linked-charts"
	import { fetchHistory } from "$lib/api/history"
	import { slide } from "svelte/transition"
	import { planetNames } from "$lib/data/planets"

  export let index
  export let row = false

  function getChartProps(history, players = false) {
    const data = {}
    ;[...history].reverse().forEach((item) => {
      const datetime = new Date(item.created_at)
      const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      }

      // @ts-ignore
      const formattedDate = datetime.toLocaleDateString(undefined, options)

      data[formattedDate] = players ? item.player_count : getPlanetPercentage(item)
    })

    return {
      data,
      scaleMax: Math.max(...Object.values(data)) + 0.00001,
      scaleMin: Math.min(...Object.values(data))
    }
  }

  function getPlanetPercentage(data) {
    const health = data.current_health
    const maxHealth = data.max_health

    return (100 - (100 / maxHealth * health)).toFixed(4)
  }
</script>

<div>
  <h4 class="mb-1/4">{planetNames[index]}</h4>

  {#await fetchHistory(index)}
    <span>Loading...</span>
  {:then data}
    <div class="charts" class:row>
      {#if Object.entries(data).length !== 0}
        {#each [{ header: "Liberation percentage", players: false }, { header: "Number of Helldivers", players: true }] as { header, players }}
          <div class="chart" transition:slide|global={{ duration: 100 }} >
            <h5>{header}</h5>

            <LinkedChart
              width={576}
              height={150}
              gap={0}
              barMinHeight={2}
              barMinWidth={2}
              linked="planet{index}"
              uid={index + header}
              lineColor="currentColor"
              fill="var(--chart-color)"
              {...getChartProps(data, players)} />

            <div class="labels">
              <div><LinkedValue uid={index + header} transform={(value) => value.toLocaleString() + (players ? "" : "%")} /></div>
              <div><LinkedLabel linked="planet{index}" /></div>
            </div>
          </div>
        {/each}
      {/if}

      {#if Object.entries(data).length < 200}
        <em transition:slide|global={{ duration: 100 }}>
          {#if Object.entries(data).length === 0}
            No activity has been recorded on this planet
          {:else}
            This data is still populating
          {/if}
        </em>
      {/if}
    </div>
  {:catch}
    Something went wrong when fetching the analytics.
  {/await}
</div>

<style lang="scss">
  h4 {
    text-align: center;
  }

  h5 {
    margin: 0 0 $margin * 0.15;
    color: darken($text-color, 20%);
    font-weight: normal;
    font-size: 1rem;
  }

  .charts {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    width: 100%;
    min-width: 15rem;
    height: auto;
    text-align: center;

    &.row {
      @include breakpoint(sm) {
        flex-direction: row;
        width: 100%;
      }
    }

    em {
      font-family: $font-family;
      font-size: 0.75rem;
      font-weight: normal;
      color: $text-color;
      line-height: 1em;
    }
  }

  .chart {
    position: relative;
    height: auto;
    color: $white;
    font-size: 0.85rem;
    line-height: 1.45em;

    :global(svg) {
      display: block;
      width: 100%;
      height: auto;
      max-height: 80px;
      background: $bg-base;

      @include breakpoint(sm) {
        max-height: 100vh;
      }
    }

    :global(svg *:focus) {
      outline: none;
      box-shadow: none;
    }
  }

  .labels {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: $margin * 0.15;
    width: 100%;
    font-family: $font-family-alt;
    font-size: 0.75rem;
    line-height: 1.45em;
    pointer-events: none;
  }
</style>
