<script>
	import { browser } from "$app/environment"
	import { api } from "$lib/api/api.js"
	import { fetchStatsForPlanet } from "$lib/api/planets.js"
	import EnvironmentalTooltip from "$lib/components/EnvironmentalTooltip.svelte"
	import Hero from "$lib/components/Hero.svelte"
	import OwnershipRecord from "$lib/components/OwnershipRecord.svelte"
	import PlanetAnalytics from "$lib/components/PlanetAnalytics.svelte"
	import WarStatistics from "$lib/components/WarStatistics.svelte"

  export let data
  export let showBackRoute = true

  $: ({ index, planet } = data)
  $: ({ name, sector, biome, environmentals, tidbit } = planet)
</script>

<svelte:head>
  {#if showBackRoute}
    <title>{name} | Helldivers Training Manual</title>
  {/if}
</svelte:head>

{#if showBackRoute}
  <a class="return" href="/planet-glossary">← Return to Planet Glossary</a>
{/if}

{#key name}
  {#if biome}
    <Hero small basepath="/images/biomes" filename="{biome.slug}" alt={name}>
      {name}
    </Hero>
  {:else}
    <h1>{name}</h1>
  {/if}

  {#if biome?.description}
    <p class="description">
      {biome.description}
    </p>
  {/if}

  <p class="mt-1/2">
    Part of the <strong>{sector} Sector</strong>
  </p>

  {@html tidbit || ""}

  <h3 class="mt-1 mb-1/4">Environmental Effects</h3>

  <div class="environmentals">
    {#each environmentals as environmental}
      <EnvironmentalTooltip full {environmental} />
    {/each}

    {#if !environmentals.length}
      <em>This planet has no environmental effects</em>
    {/if}
  </div>

  <h3 class="mt-1 mb-1/4">Recent Activity</h3>

  <div class="analytics">
    <PlanetAnalytics {index} row inline />
  </div>

  <h3 class="mt-1 mb-1/4">Ownership Records</h3>

  <div class="records">
    {#if !index || !browser}
      Loading...
    {:else}
      {#await api(`war/ownership/${index}`)}
        Loading...
      {:then records}
        {#each records as record}
          <OwnershipRecord {record} />
        {/each}
      {/await}
    {/if}
  </div>

  <h3 class="mt-1 mb-1/4">Planet Statistics</h3>

  <div class="records">
    {#if !index || !browser}
      Loading...
    {:else}
      {#await fetchStatsForPlanet(index)}
        Loading...
      {:then stats}
        {#if Object.keys(stats).length}
          <WarStatistics {stats} />
        {:else}
          <em>No statistics were found</em>
        {/if}
      {/await}
    {/if}
  </div>
{/key}

<style lang="scss">
  strong {
    color: $white;
  }

  .return {
    display: inline-block;
    margin-bottom: $margin * 0.5;
    font-weight: bold;
    text-decoration: none;
  }

  .description {
    padding: $margin * 0.5;
    background: rgba($black, 0.2);
    border-left: 5px solid $bg-dark;
  }

  .environmentals {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
  }

  .analytics {
    --chart-color: #{$primary};
    --chart-background: #{darken($bg-base, 5%)};
    max-width: $text-limit;
  }

  .records {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
  }
</style>
