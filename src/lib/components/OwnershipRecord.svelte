<script>
  import { factions } from "$lib/data/factions"
	import { planetData } from "$lib/data/planets"
	import { toSlug } from "$lib/utils/route.js"

  export let record
  export let showDate = false
</script>

<div class="item">
  {#if showDate}
    <div class="date">{new Date(record.created_at).toLocaleDateString(undefined, { month: "long", day: "numeric" })}</div>
  {/if}

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

  .date {
    margin-bottom: $margin * 0.05;
    font-size: 0.75rem;
    line-height: 1em;
    font-style: italic;
  }
</style>
