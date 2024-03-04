<script>
	import Popup from "$lib/components/Popup.svelte"
  import { LinkedChart, LinkedLabel, LinkedValue } from "svelte-tiny-linked-charts"
	import { fetchHistory } from "$lib/api/history"
	import { slide } from "svelte/transition"

  export let index

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

<Popup let:toggle>
  <button on:click={toggle}>
    <svg fill="currentColor" width="16px" height="16px" viewBox="0 0 1920 1920">
      <path d="M746.667 106.667H1173.33V1493.33H746.667V106.667ZM533.333 533.333H106.667V1493.33H533.333V533.333ZM1920 1706.67H0V1824H1920V1706.67ZM1813.33 746.667H1386.67V1493.33H1813.33V746.667Z"/>
    </svg>
  </button>

  <div slot="content" class="charts">
    {#await fetchHistory(index)}
      <span transition:slide|global={{ duration: 100 }}>Loading...</span>
    {:then data}
      {#each [{ header: "Liberation percentage", players: false }, { header: "Number of Helldivers", players: true }] as { header, players }}
        <div class="chart" transition:slide|global={{ duration: 100 }}>
          <h5 class="mt-0 mb-1/4">{header}</h5>

          <LinkedChart
            width={400}
            height={150}
            gap={0}
            barMinHeight={2}
            barMinWidth={2}
            linked="planet"
            uid={index + header}
            lineColor="currentColor"
            fill="var(--border-color)"
            {...getChartProps(data, players)} />

          <div class="labels">
            <div><LinkedValue uid={index + header} transform={(value) => value.toLocaleString() + (players ? "" : "%")} /></div>
            <div><LinkedLabel linked="planet" /></div>
          </div>
        </div>
      {/each}

      {#if Object.entries(data).length < 200}
        <em transition:slide|global={{ duration: 100 }}>This data is still populating</em>
      {/if}
    {:catch}
      Something went wrong when fetching the analytics.
    {/await}
  </div>
</Popup>

<style lang="scss">
  button {
    appearance: none;
    border: 0;
    padding: 0;
    height: auto;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
      background: rgba($black, 0.25);
      box-shadow: 0 0 0 0.25rem rgba($black, 0.25);
    }
  }

  .charts {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    width: min(20rem, 60vw);
    height: auto;

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
      background: $bg-base;
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
