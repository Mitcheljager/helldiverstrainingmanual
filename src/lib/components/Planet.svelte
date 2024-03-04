<script>
	import { factions } from "$lib/data/factions"
	import { planetNames } from "$lib/data/planets"
	import { fade, scale } from "svelte/transition"

  export let planet = {}
  export let campaign = null
  export let active = false
</script>

<button
  on:click
  transition:fade={{ duration: 100, delay: planet.index }}
  data-index={planet.index}
  class="planet {(campaign?.faction || factions[planet.initialOwner])?.toLowerCase().replace(" ", "-")}"
  class:active
  class:controlled={!campaign}
  style:--x={planet.position.x}
  style:--y={planet.position.y}
  style:--percentage="{campaign?.percentage || 0}%">
  {#if active}
    <div class="popup" transition:scale={{ start: 0.85, duration: 150 }}>
      <h5>
        {campaign?.name || planetNames[planet.index] || "Unknown Planet"}

        {#if campaign?.defense}
          <svg height="18" width="18" viewBox="0 -960 960 960"><path fill="currentColor" d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>
        {/if}
      </h5>

      {#if campaign}
        <p>{campaign?.faction}</p>
        <p>
          {campaign?.percentage.toFixed(4)}%
          {campaign?.defense ? "Defend!" : "Liberated"}
        </p>
        <p>{campaign?.players.toLocaleString()} Helldivers</p>
      {/if}
    </div>
  {/if}
</button>

<style lang="scss">
  .planet {
    --color: #{$super-earth};
    --size: calc(var(--map-width) * 0.035);
    appearance: none;
    position: absolute;
    left: calc(50% + (var(--map-width) / 2) * var(--x));
    top: calc(50% + (var(--map-width) / 2) * var(--y) * -1);
    transform: translateX(-50%) translateY(-50%);
    width: var(--size);
    height: var(--size);
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: var(--color) linear-gradient(to right, $super-earth var(--percentage), 0, var(--color) calc(100% - var(--percentage)));
    transition: width 100ms, height 100ms;
    font-size: 0;
    cursor: pointer;

    &:hover,
    &.active {
      --size: calc(var(--map-width) * 0.045);
      box-shadow: 0 0 1rem rgba($black, 0.75);
      z-index: 3;
    }

    &.active {
      --size: calc(var(--map-width) * 0.05);
    }

    &.controlled {
      --size: calc(var(--map-width) * 0.015);
    }

    @each $label, $color in $faction-colors {
      &.#{$label} {
        --color: #{$color};
      }
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
      }
    }

    h5 {
      margin: 0 0 $margin * 0.15;

      .controlled & {
        margin: 0;
      }
    }

    svg {
      display: inline-block;
      height: 0.75em;
      width: auto;
    }

    p {
      margin: 0;
    }
  }
</style>
