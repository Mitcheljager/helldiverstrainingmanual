<script>
	import { factions } from "$lib/data/factions"
	import { toSlug } from "$lib/utils/route"

  export let size = 1000
  export let faction = ""
  export let from = {}
  export let to = {}

  $: multiplier = size / 2
</script>

<polyline
  class="{toSlug(factions[faction])}"
  points="{(from.x * multiplier) + multiplier},
          {(from.y * -1 * multiplier) + multiplier}
          {(((from.x + to.x) / 2) * multiplier) + multiplier},
          {(((from.y + to.y) / 2) * -1 * multiplier) + multiplier}
          {(to.x * multiplier) + multiplier},
          {(to.y * -1 * multiplier) + multiplier}" />


<style lang="scss">
  polyline {
    stroke: $white;
    stroke-width: max(1px, calc(1px * (2.5 - var(--zoom))));
    marker-mid: url(#arrow-base);

    @each $label, $color in $faction-colors {
      &.#{$label} {
        stroke: #{$color};
      }
    }

    // There is no way to interpolate #url values

    &.super-earth {
      marker-mid: url(#arrow-super-earth);
    }

    &.terminids {
      marker-mid: url(#arrow-terminids);
    }

    &.automatons {
      marker-mid: url(#arrow-automatons);
    }
  }
</style>
