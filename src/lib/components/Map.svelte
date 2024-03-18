<script>
  // @ts-nocheck

  import { browser } from "$app/environment"
	import { createEventDispatcher, onDestroy } from "svelte"
	import { fade } from "svelte/transition"
	import { getScrollParent } from "$lib/utils/scroll"
	import { planetData } from "$lib/data/planets"
	import Switch from "$lib/components/Switch.svelte"
	import Planet from "$lib/components/Planet.svelte"
	import SupplyLines from "$lib/components/SupplyLines.svelte"
	import PlanetSearch from "$lib/components/PlanetSearch.svelte"
	import Modal from "$lib/components/Modal.svelte"
  import MapSectors from "$lib/components/MapSectors.svelte"
  import PlanetGlossaryPage from "../../routes/planet-glossary/[name]/+page.svelte"

  export let planets = []
  export let campaigns = []
  export let status = []
  export let events = []
  export let fullscreen = false
  export let allowControls = true

  const dispatch = createEventDispatcher()

  let wrapperElement
  let innerElement
  let impetusElement
  let impetus
  let mapWidth = 0
  let mapHeight = 0
  let footerHeight = 0
  let innerWidth = 0
  let activeIndex = -1
  let showLiberated = false
  let showSupplyLines = false
  let enlarge = false
  let loaded = false
  let zoom = 1
  let elementPositionX = 0
	let elementPositionY = 0
  let dragStartPosition = {}
  let foundPlanetIndexes = []
  let modalIndex = null
  let hoveringSector = null

  $: totalPlayerCount = campaigns.reduce((total, c) => total + c.players, 0)
  $: if (browser && innerElement !== null && innerWidth) bindImpetus()

  onDestroy(() => {
    if (impetus) impetus.destroy()
  })

  function getCampaign(index) {
    return campaigns.find(c => c.planetIndex === index)
  }

  function getStatus(index) {
    return status.find(s => s.index === index)
  }

  function startDrag({ pageX, pageY }) {
    if (!pageX || !pageY) return

    dragStartPosition = { x: pageX, y: pageY }
  }

  function closePopup(event) {
    if (event.pageX || event.pageY) {
      const dragDelta = 5
      const dragDifferenceX = Math.abs(event.pageX - dragStartPosition.x)
      const dragDifferenceY = Math.abs(event.pageY - dragStartPosition.y)

      if (dragDifferenceX > dragDelta || dragDifferenceY > dragDelta) return
    }

    if (event.target.nodeName === "BUTTON" || event.target.closest("button")) return
    activeIndex = -1
  }

  function setZoom(increase) {
    zoom = Math.max(1, Math.min(3, zoom + increase))
  }

  async function bindImpetus() {
    if (impetus) return
    if (!allowControls) return

    const Impetus = (await import("impetus")).default

    const bounds = innerWidth * 1.35

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

  function locate({ detail }) {
    zoom = 1
    elementPositionX = 0
    elementPositionY = 0

    activeIndex = detail

    if (fullscreen) return

    const scrollParent = getScrollParent(wrapperElement)
    if (!scrollParent) return

    wrapperElement.scrollIntoView({ behavior: "smooth", block: "center" })
  }
</script>

<svelte:window on:locate={locate} />

<div
  class="wrapper"
  class:enlarge
  class:fullscreen
  style:--map-height="{mapHeight}px"
  style:--map-width="{mapWidth}px"
  style:--inner-map-width="{innerWidth}px"
  style:--footer-height="{footerHeight}px"
  style:--zoom={zoom}
  style:--x="{elementPositionX}px"
  style:--y="{elementPositionY}px"
  bind:this={wrapperElement}>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="map"
    class:loading={!browser}
    bind:this={impetusElement}
    bind:clientWidth={mapWidth}
    bind:clientHeight={mapHeight}
    on:mousedown={startDrag}
    on:mouseup={closePopup}>

    <div class="inner" bind:this={innerElement}>
      {#if browser}
        <div class="planets">
          {#each planets as planet (planet.index)}
            {#if status && (getCampaign(planet.index) || getStatus(planet.index)?.owner !== 1 || showLiberated || foundPlanetIndexes.includes(planet.index))}
              <Planet
                {planet}
                highlight={foundPlanetIndexes.includes(planet.index)}
                campaign={getCampaign(planet.index)}
                status={status && getStatus(planet.index)}
                active={activeIndex === planet.index}
                on:details={() => modalIndex = planet.index}
                on:click={() => activeIndex = activeIndex === planet.index ? -1 : planet.index}
                on:mouseenter={() => hoveringSector = planetData[planet.index].sector} />
            {/if}
          {/each}

          {#if showSupplyLines}
            <div class="supply-lines" transition:fade={{ duration: 200 }}>
              <SupplyLines {status} {planets} />
            </div>
          {/if}
        </div>
      {/if}

      <div class="scaler" bind:clientWidth={innerWidth} />

      <div class="sectors">
        <MapSectors {status} {events} bind:hoveringSector />

        <img class="outline" src="/images/map/outline.svg" alt="" draggable="false" />
      </div>

      <img class="earth" src="/images/map/super-earth.png" alt="" draggable="false" />
    </div>

    <div class="search">
      <PlanetSearch bind:foundPlanetIndexes />
    </div>

    {#if allowControls}
      <div class="zoom">
        <button on:click={() => dispatch("fullscreen")}>⛶</button>
        <button on:click={() => setZoom(0.5)}>+</button>
        <button on:click={() => setZoom(-0.5)}>-</button>
      </div>
    {/if}
  </div>

  {#if hoveringSector}
    <div class="sector">{hoveringSector} Sector</div>
  {/if}

  {#if browser}
    <img class="blur" class:loaded src="/images/map/stars.webp" alt="" on:load={() => loaded = true}>
  {/if}
</div>

<div class="footer" class:enlarge class:fullscreen bind:clientHeight={footerHeight}>
  <div class="tray">
    <slot name="tray">
      <strong>{totalPlayerCount.toLocaleString()}</strong> Helldivers are currently fighting for Democracy. <em>Join them!</em>
    </slot>
  </div>

  <div class="switches">
    <Switch remember key="map-supply-lines" bind:active={showSupplyLines}>
      Show supply lines
    </Switch>

    <Switch remember key="map-liberated-planets" bind:active={showLiberated}>
      Show liberated planets
    </Switch>

    {#if !fullscreen}
      <div class="desktop-only">
        <Switch remember key="map-enlarge" bind:active={enlarge}>
          Enlarge
        </Switch>
      </div>
    {/if}
  </div>
</div>

{#if modalIndex !== null}
  <Modal on:close={() => modalIndex = null}>
    <PlanetGlossaryPage data={{ index: modalIndex, planet: planetData[modalIndex] }} showBackRoute={false} />
  </Modal>
{/if}

<style lang="scss">
  .wrapper {
    position: relative;
    max-width: $text-limit;
    transition: max-width 200ms, margin 200ms;

    &.enlarge {
      @include breakpoint(1500px) {
        max-width: $text-limit * 1.5;
        margin: 0 $margin * -0.5;
      }
    }

    &.fullscreen {
      height: calc(100% - var(--footer-height));
      width: 100%;
      max-width: 100vw;
    }
  }

  .map {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0;
    background: darken($bg-dark, 10%) url("/images/map/stars.webp") no-repeat;
    background-size: auto calc(110% * (1 + var(--zoom) * 0.1));
    overflow: hidden;
    contain: paint;

    @include breakpoint(lg) {
      background-position: calc(50% - var(--x, 0px) * -0.025 * var(--zoom)) calc(50% - var(--y, 0px) * -0.025 * var(--zoom));
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 0 5px $super-earth;
      z-index: 1;
      pointer-events: none;
    }

    &.loading {
      aspect-ratio: 1/1;
    }

    .fullscreen & {
      height: 100%;
      background: transparent;
    }
  }

  .inner {
    padding: $margin * 0.5;
    height: $text-limit;
    width: $text-limit;
    max-width: var(--map-width);
    max-height: var(--map-width);
    transform: translateX(var(--x)) translateY(var(--y));
    transition: margin-left 200ms;
    touch-action: none;
    will-change: transform;
    contain: layout;

    @include breakpoint(lg) {
      transition: background-size 200ms, margin-left 200ms;
    }

    img {
      display: block;
    }
  }

  .sectors {
    position: relative;
    transform: scale(calc(1.02 * var(--zoom)));
    will-change: transform;

    @include breakpoint(lg) {
      transition: transform 200ms;
    }

    :global(svg) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
  }

  .sector {
    position: absolute;
    left: 50%;
    bottom: $margin;
    transform: translateX(-50%);
    padding: $margin * 0.15;
    color: $white;
    font-family: $font-family-brand;
    font-size: 1.25rem;
    line-height: 1em;
    pointer-events: none;
  }

  .outline {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0.65;
    pointer-events: none;
  }

  .earth {
    position: absolute;
    left: 50%;
    top: 50%;
    width: min(calc(var(--map-height) * 0.1), 5rem);
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

  .supply-lines {
    position: relative;
    z-index: -1;
  }

  .footer {
    max-width: $text-limit;
    transition: max-width 200ms, margin 200ms;

    &.enlarge {
      @include breakpoint(1500px) {
        max-width: $text-limit * 1.5;
        margin: 0 $margin * -0.5;
      }
    }

    &.fullscreen {
      max-width: 100%;
      padding-bottom: $margin * 0.25;
    }
  }

  .tray {
    padding: 0 5px 5px;
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
    gap: $margin * 0.25 $margin * 0.5;
    margin-top: $margin * 0.25;

    .fullscreen & {
      padding: 0 $margin * 0.25;
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

    @include breakpoint(lg) {
      transform: translateX(calc(var(--x, 0px) * 0.15)) translateY(calc(var(--y, 0px) * 0.15));
    }

    &.loaded {
      opacity: 0.5;
    }
  }

  .zoom {
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: calc($margin * 0.25 - 5px);
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

  .search {
    position: absolute;
    bottom: $margin * 0.25;
    left: $margin * 0.25;
  }

  .desktop-only {
    display: none;

    @include breakpoint(1500px) {
      display: block;
    }
  }
</style>
