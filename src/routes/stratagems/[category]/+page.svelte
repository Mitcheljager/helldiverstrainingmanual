<script>
	import { toPath } from "$lib/utils/route.js"

  export let data

  $: ({ category } = data)
</script>

<svelte:head>
  <title>{category.category} | Helldivers Training Manual</title>
</svelte:head>

<strong>Stratagems</strong>
<h1>{category.category}</h1>

{@html category.content || ""}

<ul class="mt-1">
  {#each category.items as item}
    <li><a class="subsubroute" href={toPath([item.name, item.name, item.name])}><span>{item.name}</a></li>
  {/each}
</ul>

<style lang="scss">
  a {
    text-decoration: none;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
</style>
