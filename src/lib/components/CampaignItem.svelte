<script>
	import { hoursDifference, timeFromNow } from "$lib/utils/datetime"
	import { onDestroy, onMount, beforeUpdate } from "svelte"
	import { slide } from "svelte/transition"
	import IconDefense from "$lib/components/icons/IconDefense.svelte"
	import IconAnalytics from "$lib/components/icons/IconAnalytics.svelte"
	import PlanetAnalytics from "$lib/components/PlanetAnalytics.svelte"

  export let planetIndex = ""
  export let name = ""
  export let faction = ""
  export let percentage = 0
  export let health = 0
  export let maxHealth = 0
  export let players = 0
  export let defense = false
  export let expireDateTime = 0
  export let stacked = false

  let timeInterval
  let timeKey = 0
  let showAnalytics = false
  let previousPercentage = percentage
  let estimatedEnd = 0
  let now = Date.now()

  $: normalizedHealth = 1 - (1 / maxHealth * health) // This is used purely to shut up the compiler about missing props
  $: steady = percentage === 0 || percentage === 100 || percentage === previousPercentage
  $: rateDirection = steady ? 0 : percentage > previousPercentage ? 1 : -1
  $: if (percentage && previousPercentage) estimatedEnd = calculateTimeTo100()

  onMount(() => {
    timeInterval = setInterval(() => timeKey = Math.random(), 1000)
  })

  onDestroy(() => {
    if (timeInterval) clearInterval(timeInterval)
  })

  beforeUpdate(() => {
    previousPercentage = percentage
    now = Date.now()
  })

  function calculateTimeTo100() {
    const rateOfChange = (percentage - previousPercentage) / 10
    const remainingPercentage = 100 - percentage;
    const timeTo100InSeconds = remainingPercentage / rateOfChange

    const currentTimeInMillis = Date.now()
    const timeTo100InMillis = currentTimeInMillis + timeTo100InSeconds * 1000;

    return Math.floor(timeTo100InMillis / 1000)
  }
</script>

<div class="item {faction.toLowerCase().replace(" ", "-")}" class:stacked data-index={planetIndex} data-normalized={normalizedHealth}>
  <h3>
    <div class="title">
      {name || "Unknown Planet"}
    </div>

    <button on:click={() => showAnalytics = !showAnalytics}>
      <IconAnalytics />
    </button>
  </h3>

  <div class="content">
    <div class="bar">
      <div class="progress" style:width="{percentage}%" />

      {#if defense}
        <div class="icon">
          <IconDefense />
        </div>
      {/if}
    </div>

    <div class="info">
      <span class="percentage" class:has-icon={rateDirection}>
        {#if rateDirection}
          <svg
            class="rate-direction {rateDirection === 1 ? "positive" : "negative" }"
            width="20px"
            height="20px"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M4.788 17.444A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM13 6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.788-.409V6.965z"/>
          </svg>
        {/if}

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

    <div class="info dark">
      {#if estimatedEnd === Infinity}
        Predicting results...
      {:else if percentage === 0 && previousPercentage === 0}
        Overwhelming forces await
      {:else}
        {estimatedEnd > (now / 1000) ? "Victory" : "Loss"} in about {hoursDifference(estimatedEnd)} hrs
      {/if}
    </div>
  </div>
</div>

{#if showAnalytics}
  <div transition:slide={{ duration: 200 }}>
    <div class="analytics {faction.toLowerCase().replace(" ", "-")}">
      <PlanetAnalytics row index={planetIndex} />
    </div>
  </div>
{/if}

<style lang="scss">
  .item {
    --border-color: #{$bg-dark};
    --background-color: #{lighten($bg-base, 5%)};
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: $margin * 0.25;
    max-width: $text-limit;

    @each $label, $color in $faction-colors {
      &.#{$label} {
        --border-color: #{$color};
        --background-color: #{rgba($color, 0.25)};
      }
    }
  }

  button {
    appearance: none;
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    color: $white;
    cursor: pointer;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $margin * 0.15;
    height: 100%;
    padding: $margin * 0.15 $margin * 0.25;
    margin: 0;
    background: var(--background-color);
    transition: font-size 200ms, padding 200ms;
    font-size: 1.15rem;
    word-break: break-word;

    .title {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      height: 1.15em;
      overflow: hidden;
      line-break: anywhere;
      margin-right: auto;
    }
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
