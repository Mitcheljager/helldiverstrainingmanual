<script>
  import { LinkedChart, LinkedLabel, LinkedValue } from "svelte-tiny-linked-charts"
	import { slide } from "svelte/transition"
	import { planetData } from "$lib/data/planets"
	import { browser } from "$app/environment"
	import { api } from "$lib/api/api"
	import { humanReadableDatetime } from "$lib/utils/datetime"
	import { Timeframe } from "$lib/data/timeframe"
	import Select from "$lib/components/Select.svelte"

  export let index
  export let row = false
  export let inline = false

  const options = [
    { text: "One day", value: Timeframe.Day },
    { text: "One week", value: Timeframe.Week }
  ]

  const dataSize = {
    [Timeframe.Day]: 288,
    [Timeframe.Week]: 168
  }

  const chartAspectRatio = 3 / 1

  let timeframe = Timeframe.Day

  function getChartProps(history, players = false) {
    const data = {}
    ;[...history].reverse().forEach((item) => {
      // @ts-ignore
      const formattedDate = humanReadableDatetime(new Date(item.created_at))

      data[formattedDate] = players ? item.player_count : getPlanetPercentage(item)
    })

    return {
      data,
      scaleMax: players ? Math.max(...Object.values(data)) + 0.00001 : 100,
      scaleMin: players ? Math.min(...Object.values(data)) : 0
    }
  }

  function getPlanetPercentage(data) {
    const health = data.current_health
    const maxHealth = data.max_health

    return (100 - (100 / maxHealth * health)).toFixed(4)
  }
</script>

<div>
  <div class="header">
    {#if !inline}
      <h4 class="mb-1/4">{planetData[index].name}</h4>
    {/if}

    <div class="select">
      <Select
        right={!inline}
        small
        {options}
        value={options[0]}
        on:change={({ detail }) => timeframe = detail.value} />
    </div>
  </div>

  {#if !browser}
    Loading...
  {:else}
    <div class="charts" class:row class:inline>
      {#key timeframe}
        {#await api(`war/history/${index}?timeframe=${timeframe}`)}
          <div class="chart">
            <h5>Loading...</h5>
            <svg width={chartAspectRatio} height="1" />
          </div>

          <div class="chart">
            <h5>Loading...</h5>
            <svg width={chartAspectRatio} height="1" />
          </div>
        {:then data}
          {#if Object.entries(data).length !== 0}
            {#each [{ header: "Liberation percentage", players: false }, { header: "Number of Helldivers", players: true }] as { header, players }}
              <div class="chart">
                <h5>{header}</h5>

                <LinkedChart
                  width={dataSize[timeframe] * 2}
                  height={dataSize[timeframe] * 2 / chartAspectRatio}
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

          {#if Object.entries(data).length < 150}
            <em in:slide|global={{ duration: 100 }}>
              {#if Object.entries(data).length === 0}
                No activity has been recorded on this planet in the last 24 hours
              {:else}
                This data is still populating
              {/if}
            </em>
          {/if}
        {:catch}
          Something went wrong when fetching the analytics.
        {/await}
      {/key}
    </div>
  {/if}
</div>

<style lang="scss">
  h5 {
    margin: 0 0 $margin * 0.15;
    color: darken($text-color, 20%);
    font-weight: normal;
    font-size: 1rem;
  }

  em {
    display: block;
    width: 100%;
    font-family: $font-family;
    font-size: 0.75rem;
    font-weight: normal;
    color: darken($text-color, 20%);
    line-height: 1em;
    text-align: left;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .select {
    margin-bottom: $margin * 0.25;
  }

  .charts {
    display: grid;
    gap: $margin * 0.25;
    width: 100%;
    min-width: 15rem;
    height: auto;
    text-align: center;

    &.row {
      @include breakpoint(sm) {
        grid-template-columns: 1fr 1fr;
        width: 100%;
      }
    }

    &.inline {
      text-align: left;
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
      background: var(--chart-background, #{$bg-base});

      @include breakpoint(sm) {
        max-height: 100vh;
        min-height: 5rem;
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
