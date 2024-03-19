<script>
	import { stratagems } from "$lib/data/stratagems"
  import { page } from "$app/stores"
	import { toPath } from "$lib/utils/route"
	import { bestiary } from "$lib/data/bestiary"
	import NavigationItem from "$lib/components/NavigationItem.svelte"

  const stratagemRoutes = stratagems.map(s => ({
    text: s.category,
    subroutes: s.items.map(i => ({ text: i.name }))
  }))

  const bestiaryRoutes = bestiary.map(b => ({
    text: b.faction,
    subroutes: b.enemies.map(i => ({ text: i.name }))
  }))

  const routes = [{
    text: "Introduction",
    route: "",
  }, {
    text: "Live War Status",
    route: "war-status",
  }, {
    text: "Planetary Ownership Records",
    route: "planetary-records"
  }, {
    text: "Planet Glossary"
  }, {
    text: "Stratagems",
    subroutes: [{
        text: "Interactive Practice",
      },
      ...stratagemRoutes
    ]
  }, {
    text: "Bestiary",
    subroutes: [
      ...bestiaryRoutes
    ]
  }, {
    text: "Equipment",
    subroutes: [{
      text: "Boosters"
    }, {
      text: "Titles"
    }]
  }, {
    text: "Miscellaneous",
    subroutes: [{
      text: "Finding Super Samples",
      route: "super-samples"
    }]
  }]
</script>

<nav>
  {#each routes as { route, text, subroutes }, i}
    <NavigationItem href={route === "" ? "/" : toPath([route || text])} {text} {subroutes} {i} />
  {/each}
</nav>

<div class="coming-soon">
  More coming soon...
</div>

<div class="footer">
  <a href="/api">API</a> <br>
  <a href="/disclaimer">Disclaimer</a> <br>
  Contact me on Discord: @mitsiee <br>
  Contribute on <a href="https://github.com/Mitcheljager/helldiverstrainingmanual" target="_blank" rel="noreferrer noopener">GitHub</a>
</div>

<style lang="scss">
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .coming-soon {
    padding: $margin * 0.25;
    margin-top: $margin;
    background: repeating-linear-gradient(45deg, $bg-dark, $bg-dark 4px, transparent 4px, transparent 0.75rem);
    color: $text-color-light;
    font-weight: bold;
    text-align: center;
    font-family: $font-family-brand;
  }

  .footer {
    margin-top: $margin;
    font-size: 0.85rem;
    line-height: 1.45em;

    a {
      display: inline-block;
      color: $white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
