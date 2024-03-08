<script>
	import { factions } from "$lib/data/factions"
	import { planetNames } from "$lib/data/planets"
	import { fade, scale } from "svelte/transition"
	import AnalyticsPopup from "$lib/components/AnalyticsPopup.svelte"
	import IconDefense from "$lib/components/icons/IconDefense.svelte"

  export let planet = {}
  export let status = {}
  export let campaign = null
  export let active = false
  export let highlight = false

  $: ({ index, position } = planet)
  $: ({ name, percentage, faction, defense, players } = campaign || {})
</script>

<button
  on:click
  transition:fade={{ duration: 100, delay: index }}
  data-index={index}
  data-owner={status.owner}
  class="planet {(faction || factions[status.owner])?.toLowerCase().replace(" ", "-")}"
  class:active
  class:highlight
  class:controlled={!campaign}
  style:--x={position.x}
  style:--y={position.y}
  style:--percentage="{percentage || 0}%">

  {#if defense}
    <div class="icon">
      <IconDefense />
    </div>
  {/if}

  {#if active}
    <div class="popup" transition:scale={{ start: 0.85, duration: 150 }}>
      <h5>
        {name || planetNames[index] || "Unknown Planet"}
      </h5>

      {#if campaign}
        <p>{faction}</p>

        <p>
          {percentage.toFixed(4)}%
          {defense ? "Defend!" : "Liberated"}
        </p>

        <p>{players.toLocaleString()} Helldivers</p>
      {/if}

      <AnalyticsPopup {index} />
    </div>
  {/if}
</button>

<style lang="scss">
  .planet {
    --color: #{$super-earth};
    --size: calc(var(--inner-map-width) * 0.035);
    appearance: none;
    position: absolute;
    left: calc(50% + (var(--inner-map-width) / 2) * var(--x) * var(--zoom));
    top: calc(50% + (var(--inner-map-width) / 2) * var(--y) * var(--zoom) * -1);
    transform: translateX(-50%) translateY(-50%);
    width: calc(var(--size) * var(--zoom));
    height: calc(var(--size) * var(--zoom));
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: var(--color) linear-gradient(to right, $super-earth var(--percentage), 0, var(--color) calc(100% - var(--percentage)));
    transition: width 100ms, height 100ms, top 200ms, left 200ms, outline-offset 200ms, background-color 300ms;
    font-size: 0;
    cursor: pointer;

    &:hover,
    &.active {
      --size: calc(var(--inner-map-width) * 0.045);
      box-shadow: 0 0 1rem rgba($black, 0.75);
      z-index: 3;
    }

    &.active {
      --size: calc(var(--inner-map-width) * 0.05);
    }

    &.controlled {
      --size: calc(var(--inner-map-width) * 0.025);
      background: var(--color);

      @include breakpoint(md) {
        --size: calc(var(--inner-map-width) * 0.02);
      }
    }

    &.highlight {
      outline: 2px solid $white;
      outline-offset: 2px;
    }

    @each $label, $color in $faction-colors {
      &.#{$label} {
        --color: #{$color};
      }
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: $white;
    pointer-events: none;

    :global(svg) {
      height: calc(1.5rem * var(--zoom));
      width: auto;
      transition: height 200ms;
    }
  }

  .popup {
    --background-color: #{rgba(darken($white, 40%), 0.25)};
    --border-color: #{rgba($white, 0.25)};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-100%) translateX(-50%);
    width: 12rem;
    padding: $margin * 0.25;
    background: var(--background-color);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(1rem);
    box-shadow: 0 1rem 2rem rgba($black, 0.5);
    z-index: 5;
    color: $white;
    font-family: $font-family-alt;
    font-size: 0.85rem;

    @each $label, $color in $faction-colors {
      .#{$label} & {
        --border-color: #{rgba($color, 0.25)};
        --background-color: #{rgba(darken($color, 30%), 0.25)};
        --chart-color: #{$color};
      }
    }

    h5 {
      margin: 0 0 $margin * 0.15;
    }

    p {
      margin: 0;

      &:last-of-type {
        margin-bottom: $margin * 0.15;
      }
    }
  }
</style>
