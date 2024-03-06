<script>
	import SupplyLineConnection from "$lib/components/SupplyLineConnection.svelte"
	import { factions } from "$lib/data/factions"
	import { toSlug } from "$lib/utils/route"

  export let status = []
  export let planets = []

  const size = 1000
  const arrowSize = 15

  $: markers = [
    { faction: "base", fill: "white" },
    ...Object.values(factions).map(faction => ({ faction, fill: `var(--${toSlug(faction)})` }))
  ]

  function positionForIndex(index) {
    return planets[index].position
  }

  function getFaction(index) {
    return status.find(s => s.index === index)?.owner
  }
</script>

<svg width={size} height={size} viewBox="0 0 {size} {size}">
  {#each markers as { faction, fill }}
    <marker id="arrow-{toSlug(faction)}"
      viewBox="0 0 {arrowSize} {arrowSize}" refX="0" refY="{arrowSize / 2}"
      markerUnits="strokeWidth"
      markerWidth="{arrowSize / 2}"
      markerHeight="{arrowSize / 2}"
      orient="auto"
      {fill}>
      <path d="M 0 0 L {arrowSize} {arrowSize / 2} L 0 {arrowSize} z" />
    </marker>
  {/each}

  {#each planets as { position, waypoints, index }}
    {#each waypoints as waypoint}
      <SupplyLineConnection {size} faction={getFaction(index)} from={position} to={positionForIndex(waypoint)} />
    {/each}
  {/each}
</svg>



<style lang="scss">
  svg {
    --color: #{$white};
    width: calc(var(--inner-map-width) * var(--zoom));
    height: calc(var(--inner-map-width) * var(--zoom));
    transition: width 200ms, height 200ms;
  }
</style>
