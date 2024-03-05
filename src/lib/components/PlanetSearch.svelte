<script>
	import { browser } from "$app/environment"
	import { planetNames } from "$lib/data/planets";

  export let foundPlanetIndexes = []

  let value = ""

  $: if (browser) foundPlanetIndexes = findPlanets(value)

  function findPlanets(value) {
    if (!value) return []

    return Object.entries(planetNames)
      .filter(([_, name]) => name.toLowerCase().includes(value.toLowerCase()))
      .map(([index]) => parseInt(index))
  }
</script>

<input type="text" bind:value placeholder="Search planet name..." />

<style lang="scss">
  input {
    background: rgba($black, 0.5);
    border: 2px solid $super-earth;
    padding: $margin * 0.15;
    font-family: $font-family-alt;
    font-size: 1rem;
    color: $white;

    &::placeholder {
      color: $super-earth;
      opacity: 1;
    }

    &:focus {
      outline: 0;
      box-shadow: none;
      border-color: $white;
    }
  }
</style>
