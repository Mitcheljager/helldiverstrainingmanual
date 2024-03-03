<script>
	import { createEventDispatcher } from "svelte"

  let availableWidth = 0

  const dispatch = createEventDispatcher()

  const arrows = {
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    left: "ArrowLeft",
  }
</script>

<div class="controls" style:width="{availableWidth}px">
  <div class="arrows">
    {#each Object.entries(arrows) as [direction, key]}
      <div class="arrow {direction}">
        <button on:click={() => dispatch("click", { key })}>↑</button>
      </div>
    {/each}
  </div>

  <button on:click={() => dispatch("click", { key: "r" })}>↻</button>
</div>

<div class="scaler" bind:clientWidth={availableWidth} />

<style lang="scss">
  button {
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    aspect-ratio: 1/1;
    border: 0;
    border-radius: 1rem;
    background: rgba($white, 0.75);
    font-family: $font-family-alt;
    font-size: 1.5rem;
    font-weight: bold;
    color: $black;
    pointer-events: all;
    user-select: none;

    &:active,
    &:hover {
      background: $white;
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 12rem;
    padding: 2rem;
    background: linear-gradient(to bottom, transparent, rgba($black, 0.75));
    pointer-events: none;
  }

  .arrows {
    position: relative;
    height: 100%;
    aspect-ratio: 1/1;
  }

  .arrow {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotate(var(--rotation, 0deg));
    transform-origin: bottom center;
    height: 50%;
    width: 3rem;

    @each $label, $rotation in (up: 0, right: 90, down: 180, left: 270) {
      &.#{$label} {
        --rotation: #{$rotation}deg;
      }
    }
  }

  .scaler {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
