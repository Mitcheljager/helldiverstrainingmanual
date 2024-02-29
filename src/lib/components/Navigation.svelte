<script>
	import { stratagems } from "$lib/data/stratagems";

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const stratagemRoutes = stratagems.map(s => ({
    text: s.category,
    subroutes: s.items.map(i => ({ text: i.name }))
  }))

  const routes = [{
    text: "Introduction",
    route: "",
  }, {
    text: "Stratagems",
    subroutes: [{
        text: "Interactive Practice",
      },
      ...stratagemRoutes
    ]
  }]

  function toPath(array = []) {
    return "/" + array.map(string => string.toLowerCase().replaceAll(" ", "-")).join("/")
  }
</script>

<nav>
  {#each routes as route, i}
    <a class="route" href={route.route !== undefined ? "/" : toPath([route.text])}><span>{i}.</span> {route.text}</a>

    {#if route.subroutes}
      {#each route.subroutes as subroute, j}
        <a class="subroute" href={toPath([route.text, subroute.text])}><span>{i}{alphabet[j]}.</span> {subroute.text}</a>

        {#if subroute.subroutes}
          {#each subroute.subroutes as subsubroute, k}
            <a class="subsubroute" href={toPath([route.text, subroute.text, subsubroute.text])}><span>{i}{alphabet[j]}-{k}.</span> {subsubroute.text}</a>
          {/each}
        {/if}
      {/each}
    {/if}
  {/each}
</nav>

<style lang="scss">
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  a {
    display: inline-block;
    color: $text-color;
    text-decoration: none;

    &:hover {
      color: $white;
    }

    span {
      color: $text-color-dark;
      font-size: 0.85em;
      font-family: $font-family-brand;
    }
  }

  .route {
    margin-top: $margin * 0.25;
    color: $white;
    font-family: $font-family-brand;
    font-size: 21px;

    &:hover {
      color: $primary;
    }
  }

  .subroute {
    padding-left: $margin * 0.25;
  }

  .subsubroute {
    padding-left: $margin * 0.5;
  }
</style>
