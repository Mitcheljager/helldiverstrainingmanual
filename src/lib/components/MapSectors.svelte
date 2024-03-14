<script>
	import { factions } from "$lib/data/factions"
  import { planetData } from "$lib/data/planets"
	import { sectorPaths } from "$lib/data/sectorPaths"
	import { toSlug } from "$lib/utils/route"
	import { fade } from "svelte/transition"

  export let status
  export let events
  export let hoveringSector = null

  $: activeSectors = status && findActiveSectors()

  function findActiveSectors() {
    const activePlanets = status.filter(p => p.owner !== 1 || events.find(c => c.planetIndex === p.index))
    const sectorsForPlanets = []

    activePlanets.forEach(({ index, owner }) => {
      const event = events.find(c => c.planetIndex === index)
      const sector = planetData[index].sector

      if (sectorsForPlanets.find(({ name }) => name === sector)) return

      sectorsForPlanets.push({ name: sector, path: sectorPaths[sector], owner: event?.race || owner })
    })

    return sectorsForPlanets
  }
</script>

<svg width="1000px" height="1000px" viewBox="0 0 1000 1000">
  {#each activeSectors as { name, path, owner } (name)}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <path
      class="{toSlug(factions[owner])}" d={path}
      class:active={hoveringSector === name}
      on:mouseenter={() => hoveringSector = name}
      on:mouseleave={() => hoveringSector = null}
      transition:fade={{ duration: 200 }} />
  {/each}
</svg>

<style lang="scss">
  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  path {
    fill: $white;
    stroke: $white;
    stroke-width: 2px;
    opacity: 0.25;

    @each $label, $color in $faction-colors {
      &.#{$label} {
        fill: $color;
        stroke: $color;
      }
    }

    &.active {
      opacity: 0.4;
    }
  }
</style>
