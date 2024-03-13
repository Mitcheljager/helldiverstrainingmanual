<script>
	import StratagemLink from "$lib/components/StratagemLink.svelte"

  export let data

  $: ({ category } = data)
</script>

<svelte:head>
  <title>{category.category} | Helldivers Training Manual</title>
</svelte:head>

<strong>Stratagems</strong>
<h1>{category.category}</h1>

{@html category.content || ""}

<div class="items">
  {#each category.items as stratagem (stratagem.name)}
    <StratagemLink {stratagem} />
  {/each}
</div>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
    margin-top: $margin;
  }
</style>
