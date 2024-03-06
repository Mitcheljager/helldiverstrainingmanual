<script>
	import { createEventDispatcher } from "svelte"
	import { scale } from "svelte/transition"
	import Campaign from "$lib/components/Campaign.svelte"
	import Map from "$lib/components/Map.svelte"

  export let planetInfos = []
  export let planetStatus = []
  export let formattedCampaigns = []

  const dispatch = createEventDispatcher()

  let sidebarVisible = false
</script>

<svelte:window on:keydown={({ key }) => { if (key === "Escape") dispatch("fullscreen") }} />

<div
  class="fullscreen"
  class:sidebar-visible={sidebarVisible}
  transition:scale|global={{ start: 0.65, duration: 200 }}>
  <div class="map">
    <Map fullscreen planets={planetInfos} status={planetStatus} campaigns={formattedCampaigns} on:fullscreen />
  </div>

  <div class="campaign">
    <button class="toggle" on:click={() => sidebarVisible = !sidebarVisible}>
      Active Efforts

      {#if sidebarVisible}
        &gt;
      {:else}
        &lt;
      {/if}
    </button>

    <div class="scroll">
      <Campaign {formattedCampaigns} />
    </div>
  </div>
</div>

<style lang="scss">
  $sidebar-width: 30rem;

  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100vw;
    z-index: 100;
    background: $bg-base;
    transition: padding 200ms;

    &.sidebar-visible {
      @include breakpoint(1500px) {
        padding-right: $sidebar-width;
      }
    }
  }

  .map {
    height: 100%;
  }

  .campaign {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    max-width: $sidebar-width;
    padding: $margin $margin * 0.5 $margin * 0.5;
    transform: translateX(100%);
    background: $bg-base;
    transition: transform 200ms;
    box-shadow: inset 0 0 0 5px $super-earth;

    @include breakpoint(sm) {
      padding-top: $margin * 0.25;
    }

    @include breakpoint(1500px) {
      box-shadow: none;
      background: transparent;
    }

    .sidebar-visible & {
      transform: none;
    }
  }

  .scroll {
    height: 100%;
    overflow-y: auto;
  }

  .toggle {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    padding: $margin * 0.15;
    border: 0;
    background: $super-earth;
    color: $white;
    font-family: $font-family-brand;
    font-size: 1.25rem;
    line-height: 1em;
    transform: translateX(-100%);
    transition: transform 200ms;
    cursor: pointer;

    &:hover {
      background: lighten($super-earth, 10%);
    }

    .sidebar-visible & {
      transform: none;

      @include breakpoint(sm) {
        transform: translateX(-100%);
      }
    }
  }
</style>
