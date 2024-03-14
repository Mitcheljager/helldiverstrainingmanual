<script>
	import { timeFromNow } from "$lib/utils/datetime"
	import { onDestroy, onMount } from "svelte"
	import { slide } from "svelte/transition"
	import IconDefense from "$lib/components/icons/IconDefense.svelte"
	import IconAnalytics from "$lib/components/icons/IconAnalytics.svelte"
	import IconMajorOrder from "$lib/components/icons/IconMajorOrder.svelte"
	import PlanetAnalytics from "$lib/components/PlanetAnalytics.svelte"
	import RollingNumber from "$lib/components/RollingNumber.svelte"
	import LocateOnMap from "$lib/components/LocateOnMap.svelte"
	import PredictResults from "$lib/components/PredictResults.svelte"

  export let planetIndex = ""
  export let name = ""
  export let biome = null
  export let faction = ""
  export let percentage = 0
  export let health = 0
  export let maxHealth = 0
  export let players = 0
  export let defense = false
  export let majorOrder = false
  export let expireDateTime = 0
  export let stacked = false

  let timeInterval
  let timeKey = 0
  let showAnalytics = false
  let rateDirection

  $: normalizedHealth = 1 - (1 / maxHealth * health) // This is used purely to shut up the compiler about missing props

  onMount(() => {
    timeInterval = setInterval(() => timeKey = Math.random(), 1000)
  })

  onDestroy(() => {
    if (timeInterval) clearInterval(timeInterval)
  })
</script>

<div class="item {faction.toLowerCase().replace(" ", "-")}" class:stacked data-index={planetIndex} data-normalized={normalizedHealth}>
  <div class="title">
    <h3>
      {name || "Unknown Planet"}
    </h3>

    <div class="actions">
      <button on:click={() => showAnalytics = !showAnalytics}>
        <IconAnalytics />
      </button>

      <LocateOnMap {planetIndex} />
    </div>

    {#if biome}
      <div class="background">
        <img
          class="biome"
          loading="lazy"
          src="/images/biomes/small/{biome.slug}.jpg"
          alt="{biome.slug} biome"
          height="128"
          width="400" />
      </div>
    {/if}
  </div>

  <div class="content">
    <div class="bar">
      <div class="progress" style:width="{percentage}%" />

      {#if defense || majorOrder}
        <div class="icon">
          {#if defense}
            <IconDefense />
          {:else if majorOrder}
            <IconMajorOrder />
          {/if}
        </div>
      {/if}
    </div>

    <div class="info">
      <span class="percentage" class:has-icon={rateDirection}>
        {#if rateDirection !== 0}
          <svg
            class="rate-direction {rateDirection === 1 ? "positive" : "negative" }"
            width="20px"
            height="20px"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M4.788 17.444A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM13 6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.788-.409V6.965z"/>
          </svg>
        {/if}

        <span>
          <RollingNumber number={(percentage ? percentage.toFixed(4) : 0).toString()} />%
          {defense ? "Defend!" : "Liberated"}
        </span>

        {#if expireDateTime}
          {#key timeKey}
            {timeFromNow(expireDateTime)}
          {/key}
        {/if}
      </span>

      <span><RollingNumber number={players.toLocaleString()} /> Helldivers</span>
    </div>

    <div class="info dark">
      <PredictResults {planetIndex} {percentage} bind:rateDirection />
    </div>
  </div>
</div>

{#if showAnalytics}
  <div transition:slide={{ duration: 200 }}>
    <div class="analytics {faction.toLowerCase().replace(" ", "-")}">
      <PlanetAnalytics row={!stacked} index={planetIndex} />
    </div>
  </div>
{/if}

<style lang="scss">
  .item {
    --border-color: #{$bg-dark};
    --background-color: #{lighten($bg-base, 5%)};
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: $text-limit;

    @each $label, $color in $faction-colors {
      &.#{$label} {
        --border-color: #{$color};
        --background-color: #{rgba($color, 0.25)};
      }
    }
  }

  button {
    @include reset-button();

    &:hover {
      background: rgba($black, 0.25);
      box-shadow: 0 0 0 3px rgba($black, 0.25);
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.05;
    position: relative;
    height: 100%;
    padding: $margin * 0.2 $margin * 0.25;
    box-shadow: inset 0 0 0 2px var(--border-color);
    margin: 0;
    background: var(--background-color);
    transition: font-size 200ms, padding 200ms;

    h3 {
      position: relative;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      height: 1.1em;
      margin: 0;
      font-size: 1.1rem;
      overflow: hidden;
      line-break: anywhere;
      margin-right: auto;
      z-index: 1;
    }
  }

  .actions {
    position: relative;
    display: flex;
    gap: $margin * 0.15;
    margin-top: auto;
    z-index: 1;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }

  .biome {
    width: calc(100% + 2px);
    height: auto;
    min-height: calc(100% + 2px);
    margin: -2px -2px 0 0;
    opacity: 1;
    mask-image: linear-gradient(to left, white 10%, transparent 80%);
    object-fit: cover;
  }

  .content {
    width: 100%;
    margin: 0;
    padding: 0 0 0 $margin * 0.25;
    font-size: 1rem;
    line-height: 1.45em;
    transition: padding 200ms;
  }

  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .rate-direction {
    display: inline-block;
    top: 0;
    height: 0.75em;
    margin-right: 2px;
    width: auto;
    scale: 2;

    &.positive path {
      fill: $green;
    }

    &.negative {
      rotate: 180deg;

      path {
        fill: $red;
      }
    }
  }

  .bar {
    position: relative;
    height: 1.25rem;
    background: var(--border-color);
    transition: height 200ms;
    color: $white;
    margin-bottom: $margin * 0.25;
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
    flex-direction: column;
    gap: $margin * 0.15;
    margin-top: $margin * 0.1;
    font-family: $font-family-alt;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1em;
    transition: font-size 200ms;

    @include breakpoint(sm) {
      justify-content: space-between;
      flex-direction: row;
      gap: $margin * 0.5;
    }

    &.dark {
      color: $text-color-dark;
    }

    .stacked & {
      flex-direction: column;
      gap: $margin * 0.15;
    }

    span:last-child {
      @include breakpoint(sm) {
        text-align: right;
      }

      .stacked & {
        text-align: left;
      }
    }
  }

  .percentage {
    display: flex;
    justify-content: space-between;

    @include breakpoint(sm) {
      display: inline;
    }

    &.has-icon {
      flex-direction: row-reverse;
    }

    .stacked & {
      display: flex;
    }
  }

  .analytics {
    max-width: $text-limit;
    padding: $margin * 0.25;
    margin-top: $margin * 0.25;
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 10%);

    @each $label, $color in $faction-colors {
      &.#{$label} {
        --chart-color: #{$color};
      }
    }
  }
</style>
