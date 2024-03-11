<script>
	import Hero from "$lib/components/Hero.svelte"
	import { toSlug } from "$lib/utils/route"

  export let data

  $: ({ faction, enemy } = data)
  $: ({ name, appearance, tactics } = enemy)
</script>

<svelte:head>
  <title>{name} | Helldivers Training Manual</title>
</svelte:head>

{#key name}
  <Hero src="/images/biomes/{faction.biome.slug}.jpg">
    {faction.faction.substring(0, faction.faction.length - 1)} {name}

    <div slot="content" class="image">
      <img src="/images/bestiary/{toSlug(name)}.png" alt={name} />
    </div>
  </Hero>

  <strong>Bestiary / {faction.faction}</strong>

  <div class="description">
    <h2 class="mt-1 mb-1/2">Appearance</h2>
    {@html appearance || ""}

    <h2 class="mt-1 mb-1/2">Battlefield Tactics</h2>
    {@html tactics || ""}
  </div>
{/key}

<style lang="scss">
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      width: auto;
      filter: drop-shadow(0 0 1rem rgba($black, 0.25)) drop-shadow(0 0 2rem rgba($black, 0.5)) drop-shadow(0 0 4rem rgba($black, 0.25));
    }
  }

  .description {
    :global(h3) {
      margin: $margin 0 $margin * 0.25;
    }
  }
</style>
