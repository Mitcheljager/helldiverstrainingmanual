<script>
	import { stratagems } from "$lib/data/stratagems"
	import { toPath } from "$lib/utils/route"
	import NavigationItem from "$lib/components/NavigationItem.svelte"

  const stratagemRoutes = stratagems.map(s => ({
    text: s.category,
    subroutes: s.items.map(i => ({ text: i.name }))
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
  }]
</script>

<nav>
  {#each routes as { route, text, subroutes }, i}
    <NavigationItem href={route === "" ? "/" : toPath([route || text])} {text} {subroutes} {i} />
  {/each}
</nav>

<div class="footer">
  <a href="/api">API</a> <br>
  <a href="/disclaimer">Disclaimer</a> <br>
  Contact me on Discord: @mitsiee <br>
  Contribute on <a href="https://github.com/Mitcheljager/helldiverstrainingmanual" target="_blank" rel="noreferrer noopener">GitHub</a> <br>
  <br>
  <strong>No Automatons allowed!</strong> Using any page or content for purposes pertaining to LLMs or other generative models is not permitted.
</div>

<style lang="scss">
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
