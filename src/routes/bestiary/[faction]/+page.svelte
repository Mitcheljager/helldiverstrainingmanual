<script>
	import { toSlug } from "$lib/utils/route"

  export let data

  $: ({ faction } = data)
</script>

<svelte:head>
  <title>{faction.faction} | Helldivers Training Manual</title>
</svelte:head>

<h1>{faction.faction}</h1>

{@html faction.description || ""}

<h2 class="mt-1 mb-1/2">Enemy types</h2>

<div class="items">
  {#each faction.enemies as { name }}
    <a href="/bestiary/{toSlug(faction.faction)}/{toSlug(name)}" class="item">
      <div class="image">
        <img src="/images/bestiary/{toSlug(name)}.png" alt={name} />
      </div>

      {name}
    </a>
  {/each}
</div>

<style lang="scss">
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: $margin * 0.5;
    max-width: $text-limit * 1.5;
  }

  .item {
    display: grid;
    grid-template-rows: auto 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: $margin * 0.5;
    border: 5px solid $bg-dark;
    background: darken($bg-base, 5%);
    box-shadow: 0 0.5rem 1rem rgba($black, 0.5), 0 1rem 2rem rgba($black, 0.5);
    font-family: $font-family-brand;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    font-size: 1.5rem;

    &:hover {
      border-color: lighten($bg-dark, 20%);
      background: darken($bg-base, 3.5%);
      color: $primary;
    }
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-bottom: auto;

    img {
      width: 100%;
      height: auto;
    }
  }
</style>
