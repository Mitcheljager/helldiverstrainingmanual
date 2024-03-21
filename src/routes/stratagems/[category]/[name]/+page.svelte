<script>
	import Hero from "$lib/components/Hero.svelte"
  import Stratagem from "$lib/components/Stratagem.svelte"
	import { toSlug } from "$lib/utils/route"

  export let data

  $: ({ category, stratagem } = data)
</script>

<svelte:head>
  <title>{stratagem.name} | Helldivers Training Manual</title>
</svelte:head>

{#key stratagem.name}
  {#if category.category !== "Mission Stratagems"} <!-- Hacky solution to exclude stratagems without videos -->
    <Hero video="/videos/stratagems/{toSlug(stratagem.name)}.mp4" poster="/videos/stratagems/posters/{toSlug(stratagem.name)}.jpg">
      {stratagem.name}
    </Hero>
  {:else}
    <h1>{stratagem.name}</h1>
  {/if}

  <div class="info">
    <img src="/images/stratagems/{toSlug(stratagem.name)}.svg" alt="" width="80" height="80" />

    <div>
      <strong class="category">
				<a href="/stratagems">Stratagems </a>&nbsp;/&nbsp;
				<a href="/stratagems/{toSlug(category.category)}">{category.category}</a>
			</strong>

      {#if "cost" in stratagem}
        <div class="cost">
          Cost: <strong>{stratagem.cost?.toLocaleString()}</strong>
        </div>
      {/if}
    </div>
  </div>

  {@html stratagem.content || ""}

  <div class="mt-1/2 md:mt-1">
    <Stratagem stratagem={stratagem.name} />
  </div>
{/key}

<style lang="scss">
  img {
    width: 5rem;
    height: 5rem;
    border: 5px solid $bg-dark;
    padding: 5px;
    background: $bg-base;
  }

  a {
    display: grid;
    align-items: flex-end;
    color: $text-color;
    text-decoration: none;

    &:hover {
      color: $white;
    }
  }

  .info {
    display: flex;
    align-items: center;
    gap: $margin * 0.5;
    margin: $margin * 0.5 0;
  }

  .cost {
    color: $primary;

    strong {
      color: $white;
    }
  }

  .category {
    display: flex;
  }
</style>
