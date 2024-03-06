<script>
	import { timeFromNow } from "$lib/utils/datetime"
	import { onDestroy, onMount, afterUpdate } from "svelte"
	import { slide, fade } from "svelte/transition"
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
  export let compact = true
  export let stacked = false

  let timeInterval
  let timeKey = 0
  let showAnalytics = false
  let previousPercentage = percentage
  let rateDirection = 0 // -1, 0, 1

  $: normalizedHealth = 1 - (1 / maxHealth * health) // This is used purely to shut up the compiler about missing props

  onMount(() => {
    timeInterval = setInterval(() => timeKey = Math.random(), 1000)
  })

  onDestroy(() => {
    if (timeInterval) clearInterval(timeInterval)
  })

  afterUpdate(() => {
    if (percentage === 0 || percentage === 100) rateDirection = 0
    if (previousPercentage === percentage) return

    rateDirection = percentage > previousPercentage ? 1 : -1
  })
</script>

<div class="item {faction.toLowerCase().replace(" ", "-")}" class:compact class:stacked data-index={planetIndex} data-normalized={normalizedHealth}>
  <h3>
    <div class="title">
      {name || "Unknown Planet"}
    </div>

    <button on:click={() => showAnalytics = !showAnalytics}>
      <IconAnalytics />
    </button>

    <small>{faction}</small>
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
      <span>
        {percentage ? percentage.toFixed(4) : 0}%
        {defense ? "Defend!" : "Liberated"}

        {#if expireDateTime}
          {#key timeKey}
            {timeFromNow(expireDateTime)}
          {/key}
        {/if}

        {#if rateDirection}
          <svg
            class="rate-direction {rateDirection === 1 ? "positive" : "negative" }"
            width="20px"
            height="20px"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M4.788 17.444A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM13 6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.788-.409V6.965z"/>
          </svg>
        {/if}
      </span>

      <span>{players.toLocaleString()} Helldivers</span>
    </div>
  </div>
</div>

{#if showAnalytics}
  <div transition:slide={{ duration: 200 }}>
    <div class="analytics {faction.toLowerCase().replace(" ", "-")}" class:compact>
      <PlanetAnalytics row index={planetIndex} />
    </div>
  </div>
{/if}

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
    position: relative;
    height: 2rem;
    background: var(--border-color);
    transition: height 200ms;
    color: $white;

    .compact & {
      height: 1.25rem;
    }
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
    margin-top: $margin * 0.25;
    font-family: $font-family-alt;
    font-weight: bold;
    font-size: 0.85rem;
    line-height: 1em;
    transition: font-size 200ms;

    @include breakpoint(sm) {
      justify-content: space-between;
      flex-direction: row;
      gap: $margin * 0.5;
    }

    .stacked & {
      flex-direction: column;
      gap: $margin * 0.15;
    }

    .compact & {
      font-size: 0.75rem;
    }

    span {
      display: flex;
      justify-content: space-between;

      @include breakpoint(sm) {
        display: inline;
      }

      .stacked & {
        display: flex;
      }
    }

    span:last-child {
      @include breakpoint(sm) {
        text-align: right;
      }
    }
  }

  .analytics {
    max-width: $text-limit;
    padding: $margin * 0.25;
    background: lighten($bg-base, 10%);
    border: 5px solid $bg-dark;

    &.compact {
      margin-top: $margin * 0.25;
    }

    @each $label, $color in $faction-colors {
      &.#{$label} {
        --chart-color: #{$color};
      }
    }
  }
</style>
