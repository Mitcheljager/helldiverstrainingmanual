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
  let mouseX = 0
  let mouseY = 0

  $: totalPlayerCount = campaigns.reduce((total, c) => total + c.players, 0)

  function getCampaign(index) {
    return campaigns.find(c => c.planetIndex === index)
  }

  function getStatus(index) {
    return status.find(s => s.index === index)
  }

  function moveParallax(event) {
    const containerRect = mapElement.getBoundingClientRect()
    const containerCenterX = containerRect.left + mapElement.offsetWidth / 2
    const containerCenterY = containerRect.top + mapElement.offsetHeight / 2

    mouseX = event.clientX - containerCenterX
    mouseY = event.clientY - containerCenterY
  }

  function closePopup(event) {
    if (event.target.nodeName === "BUTTON") return
    activeIndex = -1
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="map"
  style:--map-width="{mapWidth}px"
  style:--mouse-x="{mouseX}px"
  style:--mouse-y="{mouseY}px"
  bind:this={mapElement}
  on:click={closePopup}
  on:mousemove={moveParallax}>
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

  <img class="sectors" src="/images/map/sectors.svg" alt="" />
  <img class="earth" src="/images/map/super-earth.png" alt="" />

  {#if browser}
    <img class="blur" class:loaded src="/images/map/stars.jpg" alt="" on:load={() => loaded = true}>
  {/if}
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
    background-position: calc(50% - var(--mouse-x, 0px) * -0.01) calc(50% - var(--mouse-y, 0px) * -0.01);
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
</style>
