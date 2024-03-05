<script>
	import { browser } from "$app/environment"
	import Switch from "$lib/components/Switch.svelte"
	import Planet from "$lib/components/Planet.svelte"
	import { onDestroy } from "svelte";

  export let planets = []
  export let campaigns = []
  export let status = []

  let mapElement
  let impetusElement
  let impetus
  let mapWidth = 0
  let activeIndex = -1
  let showLiberated = false
  let enlarge = false
  let loaded = false
  let zoom = 1
  let elementPositionX = 0
	let elementPositionY = 0

  $: totalPlayerCount = campaigns.reduce((total, c) => total + c.players, 0)
  $: if (browser && mapElement !== null) bindImpetus()

  onDestroy(() => {
    if (impetus) impetus.destroy()
  })

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
    zoom = Math.max(1, Math.min(3, zoom + increase))
  }

  async function bindImpetus() {
    const Impetus = (await import("impetus")).default

    const bounds = mapWidth * 1.35

    impetus = new Impetus({
      source: impetusElement,
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

<div class="wrapper" class:enlarge bind:this={impetusElement}>
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

  <div class="zoom">
    <button on:click={() => setZoom(0.5)}>+</button>
    <button on:click={() => setZoom(-0.5)}>-</button>
  </div>
  {#if browser}
    <img class="blur" class:loaded src="/images/map/stars.jpg" alt="" on:load={() => loaded = true}>
  {/if}
</div>

<div class="footer" class:enlarge>
  <div class="tray">
    <strong>{totalPlayerCount.toLocaleString()}</strong> Helldivers are currently fighting for Democracy. <em>Join them!</em>
  </div>

  <div class="switches">
    <Switch bind:active={showLiberated}>
      Show liberated planets
    </Switch>

    <div class="desktop-only">
      <Switch bind:active={enlarge}>
        Enlarge
      </Switch>
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    max-width: $text-limit;
    border: 5px solid $super-earth;
    border-bottom: 0;
    background: darken($bg-dark, 10%) url("/images/map/stars.jpg") no-repeat;
    background-position: calc(50% - var(--x, 0px) * -0.015 * var(--zoom)) calc(50% - var(--y, 0px) * -0.015 * var(--zoom));
    background-size: auto calc(110% * (1 + var(--zoom) * 0.1));
    transition: max-width 200ms;
    overflow: hidden;

    &.enlarge {
      max-width: $text-limit * 1.5;
    }
  }

  .map {
    padding: $margin * 0.5;
    height: $text-limit;
    width: $text-limit;
    transform: translateX(var(--x)) translateY(var(--y));
    transition: background-size 200ms, margin-left 200ms;
    touch-action: none;

    .enlarge & {
      margin-left: calc((100% - var(--map-width)) / 2);
    }

    img {
      display: block;
    }
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

  .footer {
    max-width: $text-limit;
    transition: max-width 200ms;

    &.enlarge {
      max-width: $text-limit * 1.5;
    }
  }

  .tray {
    padding: 5px;
    background: $super-earth;
    font-size: 0.75rem;
    font-family: $font-family-alt;
    color: $white;
    text-align: center;
    line-height: 1.35em;
  }

  .switches {
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
      width: 2.5rem;
      height: 2.5rem;
      color: $white;
      font-family: $font-family-alt;
      font-size: 2rem;
      cursor: pointer;

      @include breakpoint(sm) {
        width: 2rem;
        height: 2rem;
      }

      @media (hover: hover) {
        &:hover {
          background: $white;
          color: $super-earth;
        }
      }
    }
  }

  .desktop-only {
    display: none;

    @include breakpoint(1500px) {
      display: block;
    }
  }
</style>
