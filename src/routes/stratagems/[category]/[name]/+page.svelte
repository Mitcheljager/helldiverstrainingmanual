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
  <Hero video="/videos/stratagems/{toSlug(stratagem.name)}.mp4">
    {stratagem.name}
  </Hero>

  <strong>Stratagems / {category.category}</strong>

  {@html stratagem.content || ""}

  <div class="mt-1/2 md:mt-1">
    <Stratagem stratagem={stratagem.name} />
  </div>
{/key}
