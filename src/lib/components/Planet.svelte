<script>
	import { createEventDispatcher } from "svelte"
	import { factions } from "$lib/data/factions"
	import { planetData } from "$lib/data/planets"
	import { fade, scale } from "svelte/transition"
	import AnalyticsPopup from "$lib/components/AnalyticsPopup.svelte"
	import IconDefense from "$lib/components/icons/IconDefense.svelte"
	import IconMajorOrder from "$lib/components/icons/IconMajorOrder.svelte"

  export let planet = {}
  export let status = {}
  export let campaign = null
  export let active = false
  export let highlight = false
  export let activeMajorOrder = false

  const dispatch = createEventDispatcher()

  $: ({ index, position } = planet)
  $: ({ percentage, faction, defense, majorOrder: eventMajorOrder, players } = campaign || {})
  $: data = planetData[index]
  $: name = campaign?.name || data?.name || "Unknown Planet"
</script>

<button
  on:click
  on:mouseenter
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

  <div class="name">
    {name}
  </div>

  {#if defense || eventMajorOrder || activeMajorOrder}
    <div class="icon">
      {#if defense}
        <IconDefense />
      {:else if eventMajorOrder || activeMajorOrder}
        <IconMajorOrder />
      {/if}
    </div>
  {/if}

  {#if active}
    <div class="popup" transition:scale={{ start: 0.85, duration: 150 }}>
      {#if data.biome}
        <img src="/images/biomes/{data.biome.slug}.jpg" alt="{data.biome.slug} biome" height="128" width="400" />
      {/if}

      <h5>
        {name}
      </h5>

      <p class="faction">{faction || factions[status.owner]}</p>

      {#if campaign}
        <div class="bar">
          <div class="progress" style:width="{percentage}%" />
        </div>

        <p class="small">
          {percentage.toFixed(2)}%
          {defense ? "Defend!" : "Liberated"}
        </p>

        <p class="small">{players.toLocaleString()} Helldivers</p>
      {/if}

      <div class="actions">
        <AnalyticsPopup {index} />

        <button class="details" on:click={() => dispatch("details")}>Planet details</button>
      </div>
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
    width: calc(var(--size) * min(var(--zoom), 3));
    height: calc(var(--size) * min(var(--zoom), 3));
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: var(--color) linear-gradient(to right, $super-earth var(--percentage), 0, var(--color) calc(100% - var(--percentage)));
    font-size: 0;
    cursor: pointer;

    @include breakpoint(lg) {
      transition: width 100ms, height 100ms, top 200ms, left 200ms, outline-offset 200ms, background-color 300ms;
    }

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

  .name {
    display: none;
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
    color: $white;
    text-shadow: 0 0 6px rgba($black, 0.75), 0 0 3px rgba($black, 0.75);
    font-size: 1.15rem;
    font-family: $font-family-brand;
    white-space: nowrap;

    .planet:hover & {
      display: block;
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
      height: calc(1rem * var(--zoom));
      width: auto;

      @include breakpoint(lg) {
        transition: height 200ms;
        height: calc(1.5rem * var(--zoom));
      }
    }
  }

  .popup {
    --background-color: #{rgba(darken($white, 40%), 0.25)};
    --border-color: #{rgba($white, 0.25)};
    position: absolute;
    left: 50%;
    top: $margin * -0.1;
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
      position: relative;
      margin: 0 0 $margin * 0.15;
    }

    p {
      margin: 0;

      &:last-of-type {
        margin-bottom: $margin * 0.15;
      }
    }

    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      mask-image: linear-gradient(to bottom, white, transparent);
    }
  }

  .faction {
    color: var(--chart-color);
    font-weight: bold;
  }

  .bar {
    position: relative;
    height: 0.5rem;
    background: var(--border-color);
    color: $white;
    margin: $margin * 0.15 0;
  }

  .progress {
    background: $super-earth;
    height: 100%;
  }

  .small {
    font-size: 0.85em;
    opacity: 0.75;
  }

  .actions {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: $margin * 0.25;
    margin: $margin * 0.25 0 0;
  }

  .details {
    appearance: none;
    padding: 0;
    margin: 0;
    border: 0;
    border-bottom: 1px solid rgba($white, 0.5);
    background: transparent;
    color: $white;
    font-family: $font-family-alt;
    font-size: 0.75rem;
    cursor: pointer;

    &:hover {
      border-color: $white;
      background: rgba($black, 0.25);
      box-shadow: 0 0 0 0.25rem rgba($black, 0.25);
    }
  }
</style>
