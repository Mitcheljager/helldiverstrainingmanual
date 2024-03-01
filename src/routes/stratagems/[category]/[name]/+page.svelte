<script>
	import Stratagem from "$lib/components/Stratagem.svelte"

  export let data

  $: ({ category, stratagem } = data)
</script>

<svelte:head>
  <title>{stratagem.name} | Helldivers Training Manual</title>
</svelte:head>

<strong>Stratagems / {category.category}</strong>
<h1>{stratagem.name}</h1>

{@html stratagem.content || ""}

<div class="mt-1/2 md:mt-1">
	<Stratagem sequence={stratagem.sequence} />
</div>
