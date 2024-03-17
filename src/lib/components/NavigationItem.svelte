<script>
  import { page } from "$app/stores"
	import { toPath } from "$lib/utils/route"

  export let href = ""
  export let text = ""
  export let subroutes = []
  export let isSubroute = false
  export let isSubsubroute = false
  export let i = 0
  export let j = 0
  export let letter = ""

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  $: active = $page.url.pathname === href
</script>

<a
  {href}
  class:route={!isSubroute && !isSubsubroute}
  class:active
  class:subroute={isSubroute}
  class:subsubroute={isSubsubroute}>

  <span>{i}{letter}{isSubsubroute ? `-${j}` : ""}.</span> {text}
</a>

{#if subroutes?.length}
  {#each subroutes as { route, text, subroutes: subsubroutes }, j}
    <svelte:self
      {text}
      {i}
      {j}
      href={toPath([href, route || text])}
      subroutes={subsubroutes}
      letter={letter || alphabet[j]}
      isSubroute={!isSubroute}
      isSubsubroute={isSubroute} />
  {/each}
{/if}

<style lang="scss">
  a {
    display: grid;
    align-items: flex-end;
    color: $text-color;
    text-decoration: none;

    &:hover {
      color: $white;
    }

    &.active {
      color: $primary;
    }

    span {
      color: $text-color-dark;
      font-size: 0.85em;
      font-family: $font-family-brand;
      font-weight: normal;
      white-space: nowrap;
    }
  }

  .route {
    grid-template-columns: 0.95rem auto;
    margin-top: $margin * 0.25;
    color: $white;
    font-family: $font-family-brand;
    font-size: 21px;

    &:hover {
      color: $primary;
    }
  }

  .subroute {
    grid-template-columns: 1.15rem auto;
    padding-left: $margin * 0.25;
    font-weight: bold;
  }

  .subsubroute {
    grid-template-columns: 1.85rem auto;
    padding-left: $margin * 0.5;
  }
</style>
