<script>
	import { timeFromNow } from "$lib/utils/datetime"
	import { onDestroy, onMount } from "svelte"
	import { LinkedChart, LinkedLabel, LinkedValue } from "svelte-tiny-linked-charts"
	import { fetchHistory } from "$lib/api/history"
	import Popup from "$lib/components/Popup.svelte"

  export let planetIndex = ""
  export let name = ""
  export let faction = ""
  export let percentage = 0
  export let players = 0
  export let defense = false
  export let expireDateTime = 0
  export let compact = true

  let timeInterval
  let timeKey = 0

  onMount(() => {
    timeInterval = setInterval(() => timeKey = Math.random(), 1000)
  })

  onDestroy(() => {
    if (timeInterval) clearInterval(timeInterval)
  })

  function getChartProps(history, players = false) {
    const data = {}
    ;[...history].reverse().forEach((item) => {
      const datetime = new Date(item.created_at)
      const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
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

<div class="item {faction.toLowerCase().replace(" ", "-")}" class:compact data-index={planetIndex}>
  <h3>
    <div class="title">
      {name || "Unknown Planet"}
    </div>

    {#if defense}
      <svg height="18" width="18" viewBox="0 -960 960 960"><path fill="currentColor" d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>
    {/if}

    <Popup let:toggle>
      <button on:click={toggle}>
        <svg fill="currentColor" width="16px" height="16px" viewBox="0 0 1920 1920">
          <path d="M746.667 106.667H1173.33V1493.33H746.667V106.667ZM533.333 533.333H106.667V1493.33H533.333V533.333ZM1920 1706.67H0V1824H1920V1706.67ZM1813.33 746.667H1386.67V1493.33H1813.33V746.667Z"/>
        </svg>
      </button>

      <div slot="content" class="charts">
        {#await fetchHistory(planetIndex)}
          Loading...
        {:then data}
          {#each [{ header: "Liberation percentage", players: false }, { header: "Number of Helldivers", players: true }] as { header, players }}
            <div class="chart">
              <h5 class="mt-0 mb-1/4">{header}</h5>

              <LinkedChart
                width={400}
                height={100}
                gap={0}
                barMinHeight={2}
                barMinWidth={2}
                linked="planet"
                uid={planetIndex + header}
                lineColor="currentColor"
                fill="var(--border-color)"
                {...getChartProps(data, players)} />

              <div class="labels">
                <div><LinkedValue uid={planetIndex + header} /></div>
                <div><LinkedLabel linked="planet" /></div>
              </div>
            </div>
          {/each}

          {#if Object.entries(data).length < 200}
            <em>This data is still populating</em>
          {/if}
        {:catch}
          Something went wrong when fetching the analytics.
        {/await}
      </div>
    </Popup>

    <small>{faction}</small>
  </h3>

  <div class="content">
    <div class="bar">
      <div class="progress" style:width="{percentage}%" />
    </div>

    <div class="info">
      <span>
        {percentage ? percentage.toFixed(4) : 0}%
        {defense ? "Defend!" : "Liberated"}

        {#if expireDateTime}
          {#key timeKey}
            {timeFromNow(expireDateTime)}
          {/key}
        {/if}
      </span>

      <span>{players.toLocaleString()} Helldivers</span>
    </div>
  </div>
</div>

<style lang="scss">
  .item {
    --border-color: #{$bg-dark};
    --background-color: #{lighten($bg-base, 5%)};
    max-width: $text-limit;
    border: 5px solid var(--border-color);
    transition: border 200ms;

    &.compact {
      display: grid;
      grid-template-columns: 1fr 2fr;
      border: 0 solid transparent;
      margin-top: $margin * 0.25;
    }

    @each $label, $color in $faction-colors {
      &.#{$label} {
        --border-color: #{$color};
        --background-color: #{rgba($color, 0.25)};
      }
    }
  }

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

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $margin * 0.15;
    margin: 0;
    background: var(--background-color);
    padding: $margin * 0.25;
    transition: font-size 200ms, padding 200ms;
    word-break: break-word;

    .compact & {
      height: 100%;
      padding: $margin * 0.15 $margin * 0.25;
      font-size: 1.15rem;
    }

    .title {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      height: 1.15em;
      overflow: hidden;
      line-break: anywhere;
      margin-right: auto;
    }

    small {
      opacity: 0.75;
      color: var(--border-color);
      font-size: 0.65em;
      text-align: right;

      .compact & {
        display: none;
      }
    }

    svg {
      display: inline-block;
      height: 1em;
      width: auto;

      .compact & {
        margin: 0;
      }
    }
  }

  .content {
    margin: 0;
    padding: $margin * 0.25;
    font-size: 1rem;
    line-height: 1.45em;
    transition: padding 200ms;

    .compact & {
      width: 100%;
      padding: 0 0 0 $margin * 0.25;
    }
  }

  .bar {
    height: 2rem;
    background: var(--border-color);
    transition: height 200ms;

    .compact & {
      height: 1rem;
    }
  }

  @keyframes progress {
    from {
      width: 0;
    }
  }

  .progress {
    background: $super-earth;
    height: 100%;
    animation: progress 1000ms forwards;
  }

  .info {
    display: flex;
    justify-content: space-between;
    gap: $margin * 0.5;
    margin-top: $margin * 0.25;
    font-family: $font-family-alt;
    font-weight: bold;
    font-size: 0.85rem;
    line-height: 1em;
    transition: font-size 200ms;

    .compact & {
      font-size: 0.75rem;
    }

    span:last-child {
      text-align: right;
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
