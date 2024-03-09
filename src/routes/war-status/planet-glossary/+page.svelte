<script>
  import EnvironmentalTooltip from "$lib/components/EnvironmentalTooltip.svelte"
  import Hero from "$lib/components/Hero.svelte"
  import { planetData } from "$lib/data/planets"

  function groupPlanetsBySector() {
    const groupedBySector = {}

    for (const planetId in planetData) {
      const planet = planetData[planetId]
      const sector = planet.sector
      if (!groupedBySector[sector]) {
        groupedBySector[sector] = []
      }
      groupedBySector[sector].push(planet)
    }

    return groupedBySector
  }
</script>

<Hero src="/images/content/planet-glossary.jpg">
  Planet Glossary
</Hero>

<p class="mb-1">Welcome to the Planet Glossary, within these pages you'll find information on each planet caught in the crossfire of this interstellar conflict. Each world holds its own secrets, challenges, and strategic significance. Explore the cosmic tapestry of war as you delve into the unique characteristics and histories of these celestial bodies. May this glossary serve as your guide through the turbulent seas of space, offering insights into the ever-shifting tides of fortune in the ongoing battle for Democracy.</p>

<h2 class="mb-1/2">Planets by sector</h2>

<div class="items">
  {#each Object.entries(groupPlanetsBySector()).sort((a, b) => a[0] > b[0] ? 1 : -1) as [sector, planets]}
    <h3 class="mt-1/4 mb-0">{sector}</h3>

    {#each planets.sort((a, b) => a.name > b.name ? 1 : -1) as planet}
      <a class="item" href="">
        <div class="content">
          <div class="name">{planet.name}</div>

          <div class="environmentals">
            {#each planet.environmentals as environmental}
              <EnvironmentalTooltip {environmental} />
            {/each}
          </div>
        </div>

        {#if planet.biome}
          <div class="background">
            <img class="biome" src="/images/biomes/{planet.biome.slug}.jpg" alt="{planet.biome.slug} biome" height="128" width="400" />
          </div>
        {/if}
      </a>
    {/each}
  {/each}
</div>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
  }

  .item {
    position: relative;
    background: lighten($bg-base, 5%);
    padding: $margin * 0.25;
    color: $text-color-light;
    text-decoration: none;

    &:hover {
      background: lighten($bg-base, 10%);
      color: $white;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $margin * 0.5;
    position: relative;
    font-weight: bold;
    font-size: 1.15rem;
  }

  .name {
    position: relative;
    z-index: 1;
  }

  .environmentals {
    display: flex;
    gap: $margin * 0.1;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }

  .biome {
    width: 50%;
    height: auto;
    opacity: 0.5;
    mask-image: linear-gradient(to right, white, transparent);


    .item:hover & {
      opacity: 0.75;
    }
  }
</style>
