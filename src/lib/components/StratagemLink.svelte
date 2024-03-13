<script>
	import { stratagems } from "$lib/data/stratagems"
	import { toSlug } from "$lib/utils/route"

  export let stratagem = {}

  $: category = stratagems.find(s => s.items.find(i => i.name === stratagem.name))
</script>

<a href="/stratagems/{toSlug(category?.category)}/{toSlug(stratagem.name)}">
  <img src="/images/stratagems/{toSlug(stratagem.name)}.svg" alt="" width="40" height="40" />

  {stratagem.name}
</a>

<style lang="scss">
  a {
    display: flex;
    align-items: center;
    gap: $margin * 0.25;
    padding: $margin * 0.25;
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 5%);
    color: lighten($text-color, 10%);
    text-decoration: none;
    font-family: $font-family-brand;
    font-size: 1.25rem;

    &:hover {
      color: $white;
      border-color: lighten($bg-dark, 20%);
    }
  }
</style>
