<script>
	import { browser } from "$app/environment"
	import Switch from "$lib/components/Switch.svelte"
	import Planet from "$lib/components/Planet.svelte"

  export let planets = []
  export let campaigns = []
  export let status = []

  let mapElement
  let mapWidth = 0
  let activeIndex = -1
  let showLiberated = false
  let loaded = false
  let zoom = 1
  let elementPositionX = 0
	let elementPositionY = 0

  $: totalPlayerCount = campaigns.reduce((total, c) => total + c.players, 0)
  $: if (browser && mapElement !== null) bindImpetus()

  function getCampaign(index) {
    return campaigns.find(c => c.planetIndex === index)
  }

  function getStatus(index) {
    return status.find(s => s.index === index)
  }
  function closePopup(event) {
    if (event.target.nodeName === "BUTTON") return
    activeIndex = -1
  }

  function setZoom(increase) {
    zoom = Math.max(1, Math.min(2, zoom + increase))
  }

  async function bindImpetus() {
    const Impetus = (await import("impetus")).default

    const bounds = mapWidth * 0.85

    new Impetus({
      source: mapElement,
      friction: 0.96,
      boundX: [-bounds, bounds],
      boundY: [-bounds, bounds],
			update (x, y) {
				elementPositionX = x
				elementPositionY = y
			}
		})
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="map"
  style:--map-width="{mapWidth}px"
  style:--zoom={zoom}
  style:--x="{elementPositionX}px"
  style:--y="{elementPositionY}px"
  bind:this={mapElement}
  on:click={closePopup}>

  <div class="impetus">
    {#if browser}
      <div class="planets">
        {#each planets as planet}
          {#if getCampaign(planet.index) || getStatus(planet.index)?.owner !== 1 || showLiberated}
            <Planet
              {planet}
              campaign={getCampaign(planet.index)}
              status={getStatus(planet.index)}
              active={activeIndex === planet.index}
              on:click={() => activeIndex = activeIndex === planet.index ? -1 : planet.index} />
          {/if}
        {/each}
      </div>
    {/if}

    <div class="scaler" bind:clientWidth={mapWidth} />

    <img class="sectors" src="/images/map/sectors.svg" alt="" draggable="false" />
    <img class="earth" src="/images/map/super-earth.png" alt="" draggable="false" />
  </div>

  {#if browser}
    <img class="blur" class:loaded src="/images/map/stars.jpg" alt="" on:load={() => loaded = true}>
  {/if}

  <div class="zoom">
    <button on:click={() => setZoom(0.5)}>+</button>
    <button on:click={() => setZoom(-0.5)}>-</button>
  </div>
</div>

<div class="tray">
  <strong>{totalPlayerCount.toLocaleString()}</strong> Helldivers are currently fighting for Democracy. <em>Join them!</em>
</div>

<div class="switches">
  <Switch bind:active={showLiberated}>
    Show liberated planets
  </Switch>
</div>

<style lang="scss">
  .map {
    position: relative;
    max-width: $text-limit;
    padding: $margin * 0.5;
    border: 5px solid $super-earth;
    border-bottom: 0;
    background: darken($bg-dark, 10%) url("/images/map/stars.jpg") no-repeat;
    background-position: calc(50% - var(--x, 0px) * -0.015 * var(--zoom)) calc(50% - var(--y, 0px) * -0.015 * var(--zoom));
    background-size: auto calc(110% * (1 + var(--zoom) * 0.1));
    aspect-ratio: 1/1;
    overflow: hidden;
    transition: background-size 200ms;
    touch-action: none;

    img {
      display: block;
    }
  }

  .impetus {
    transform: translateX(var(--x)) translateY(var(--y));
  }

  .sectors {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0.65;
    transform: scale(var(--zoom));
    transition: transform 200ms;
  }

  .earth {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(var(--map-width) * 0.1);
    transform: translateX(-50%) translateY(-50%);
    filter: drop-shadow(0 0 0.5rem $black) drop-shadow(0 0 2rem $black) drop-shadow(0 0 5rem $super-earth);
  }

  .planets {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 5;
  }

  .tray {
    max-width: $text-limit;
    padding: 5px;
    background: $super-earth;
    font-size: 0.75rem;
    font-family: $font-family-alt;
    color: $white;
    text-align: center;
    line-height: 1.35em;
  }

  .switches {
    max-width: $text-limit;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: $margin * 0.5;
    margin-top: $margin * 0.25;
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
    transform: translateX(calc(var(--mouse-x, 0px) * 0.2)) translateY(calc(var(--mouse-y, 0px) * 0.2));
    transition: opacity 1500ms;
    pointer-events: none;

    &.loaded {
      opacity: 0.5;
    }
  }

  .zoom {
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: $margin * 0.25;
    bottom: $margin * 0.25;
    right: $margin * 0.25;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      appearance: none;
      background: $super-earth;
      border: 0;
      padding: 0;
      margin: 0;
      width: 2rem;
      height: 2rem;
      color: $white;
      font-family: $font-family-alt;
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        background: $white;
        color: $super-earth;
      }
    }
  }
</style>
