<script>
	import { browser } from "$app/environment"
	import { outside } from "$lib/actions/outside"
	import { scale } from "svelte/transition"

  export let planets = []
  export let campaigns = []

  let mapElement
  let mapWidth = 0
  let activeIndex = -1
  let loaded = false
  let mouseX = 0
  let mouseY = 0

  function getCampaign(index) {
    return campaigns.find(c => c.planetIndex === index)
  }

  function moveParallax(event) {
    const containerRect = mapElement.getBoundingClientRect()
    const containerCenterX = containerRect.left + mapElement.offsetWidth / 2
    const containerCenterY = containerRect.top + mapElement.offsetHeight / 2

    mouseX = event.clientX - containerCenterX
    mouseY = event.clientY - containerCenterY
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="map"
  style:--map-width="{mapWidth}px"
  style:--mouse-x="{mouseX}px"
  style:--mouse-y="{mouseY}px"
  bind:this={mapElement}
  on:mousemove={moveParallax}>
  {#if browser}
    <div class="planets">
      {#each planets as planet}
        {#if getCampaign(planet.index)}
          <button
            use:outside
            on:close={() => { if (activeIndex === planet.index) activeIndex = -1 }}
            on:click={() => activeIndex = activeIndex === planet.index ? -1 : planet.index}
            class="planet {getCampaign(planet.index)?.faction?.toLowerCase().replace(" ", "-")}"
            class:active={activeIndex === planet.index}
            style:--x={planet.position.x}
            style:--y={planet.position.y}
            style:--percentage="{getCampaign(planet.index)?.percentage}%">
            {#if activeIndex === planet.index}
              <div class="popup" transition:scale={{ start: 0.85, duration: 150 }}>
                <h5>
                  {getCampaign(planet.index)?.name}
                  {#if getCampaign(planet.index)?.defense}
                    <svg height="18" width="18" viewBox="0 -960 960 960"><path fill="currentColor" d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>
                  {/if}
                </h5>
                <p>{getCampaign(planet.index)?.faction}</p>
                <p>
                  {getCampaign(planet.index)?.percentage.toFixed(4)}%
                  {getCampaign(planet.index)?.defense ? "Defend!" : "Liberated"}
                </p>
                <p>{getCampaign(planet.index)?.players.toLocaleString()} Helldivers</p>
              </div>
            {/if}
          </button>
        {/if}
      {/each}
    </div>
  {/if}

  <div class="scaler" bind:clientWidth={mapWidth} />

  <img class="sectors" src="/images/map/sectors.svg" alt="" />
  <img class="earth" src="/images/map/super-earth.png" alt="" />

  {#if browser}
    <img class="blur" class:loaded src="/images/map/stars.jpg" alt="" on:load={() => loaded = true}>
  {/if}
</div>

<style lang="scss">
  .map {
    position: relative;
    max-width: $text-limit;
    padding: $margin * 0.5;
    border: 5px solid $bg-dark;
    background: darken($bg-dark, 10%) url("/images/map/stars.jpg") no-repeat;
    background-position: calc(50% - var(--mouse-x, 0px) * -0.02) calc(50% - var(--mouse-y, 0px) * -0.02);
    background-size: auto 110%;
    aspect-ratio: 1/1;

    img {
      display: block;
    }
  }

  .sectors {
    display: block;
    width: 100%;
    height: auto;
    mix-blend-mode: soft-light;
  }

  .earth {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(var(--map-width) * 0.1);
    transform: translateX(-50%) translateY(-50%);
    filter: drop-shadow(0 0 0.5rem black) drop-shadow(0 0 2rem black);
  }

  .planets {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 5;
  }

  .planet {
    --color: #{$white};
    --size: calc(var(--map-width) * 0.035);
    appearance: none;
    position: absolute;
    left: calc(50% + (var(--map-width) / 2) * var(--x));
    top: calc(50% + (var(--map-width) / 2) * var(--y) * -1);
    transform: translateX(-50%) translateY(-50%);
    width: var(--size);
    height: var(--size);
    border: 0;
    border-radius: 50%;
    background: $white linear-gradient(to right, $super-earth var(--percentage), 0, var(--color) calc(100% - var(--percentage)));
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
      --size: calc(var(--map-width) * 0.05)
    }

    &.automatons {
      --color: #{$automatons};
    }

    &.terminids {
      --color: #{$terminids};
    }

    &.super-earth {
      --color: #{$super-earth};
    }
  }

  .popup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-100%) translateX(-50%);
    width: 12rem;
    padding: $margin * 0.25;
    background: rgba(darken($super-earth, 40%), 0.25);
    border: 1px solid rgba($super-earth, 0.25);
    backdrop-filter: blur(1rem);
    box-shadow: 0 1rem 2rem rgba($black, 0.5);
    z-index: 5;
    color: $white;
    font-family: $font-family-alt;
    font-size: 0.85rem;

    h5 {
      margin: 0 0 $margin * 0.15;
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

  .blur {
    position: absolute;
    top: -10%;
    left: -10%;
    height: 120%;
    width: 120%;
    opacity: 0;
    filter: blur(100px);
    z-index: -1;
    transition: opacity 1500ms;
    pointer-events: none;

    &.loaded {
      opacity: 0.5;
    }
  }
</style>
