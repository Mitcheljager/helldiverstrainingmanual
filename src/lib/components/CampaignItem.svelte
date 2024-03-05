<script>
	import { timeFromNow } from "$lib/utils/datetime"
	import { onDestroy, onMount } from "svelte"
	import AnalyticsPopup from "$lib/components/AnalyticsPopup.svelte"
	import IconDefense from "$lib/components/icons/IconDefense.svelte"

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

  let timeInterval
  let timeKey = 0

  $: normalizedHealth = 1 - (1 / maxHealth * health) // This is used purely to shut up the compiler about missing props

  onMount(() => {
    timeInterval = setInterval(() => timeKey = Math.random(), 1000)
  })

  onDestroy(() => {
    if (timeInterval) clearInterval(timeInterval)
  })
</script>

<div class="item {faction.toLowerCase().replace(" ", "-")}" class:compact data-index={planetIndex} data-normalized={normalizedHealth}>
  <h3>
    <div class="title">
      {name || "Unknown Planet"}
    </div>

    <AnalyticsPopup index={planetIndex} />

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
        --chart-color: #{$color};
        --background-color: #{rgba($color, 0.25)};
      }
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
      height: 1rem;
    }
  }

  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
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
</style>
