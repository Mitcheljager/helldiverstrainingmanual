<script>
  import { factions } from "$lib/data/factions"
	import { planetData } from "$lib/data/planets"
	import { toSlug } from "$lib/utils/route.js"

  export let record
</script>

<div class="item">
  <strong>{planetData[record.planet_index].name}</strong>

  {#if record.current_owner === record.previous_owner}
    was originally owned by <strong class={toSlug(factions[record.current_owner])}>{factions[record.current_owner]}</strong>
  {:else}
    was taken by <strong class={toSlug(factions[record.current_owner])}>{factions[record.current_owner]}</strong>,
    previously owned by <strong class={toSlug(factions[record.previous_owner])}>{factions[record.previous_owner]}</strong>
  {/if}
</div>

<style lang="scss">
  strong {
    color: $white;

    @each $label, $color in $faction-colors {
      &.#{$label} {
        color: #{$color};
      }
    }
  }

  .item {
    padding: $margin * 0.25;
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 5%);
  }
</style>
