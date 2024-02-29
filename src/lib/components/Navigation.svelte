<script>
	import { stratagems } from "$lib/data/stratagems"
  import { page } from "$app/stores"

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

  function isActive(array = []) {
    return $page.url.pathname === toPath(array)
  }
</script>

<nav>
  {#key $page.url.pathname}
    {#each routes as route, i}
      <a class="route" class:active={isActive([route.text])} href={route.route !== undefined ? "/" : toPath([route.text])}><span>{i}.</span> {route.text}</a>

      {#if route.subroutes}
        {#each route.subroutes as subroute, j}
          <a class="subroute" class:active={isActive([route.text, subroute.text])} href={toPath([route.text, subroute.text])}><span>{i}{alphabet[j]}.</span> {subroute.text}</a>

          {#if subroute.subroutes}
            {#each subroute.subroutes as subsubroute, k}
              <a class="subsubroute" class:active={isActive([route.text, subroute.text, subsubroute.text])} href={toPath([route.text, subroute.text, subsubroute.text])}><span>{i}{alphabet[j]}-{k}.</span> {subsubroute.text}</a>
            {/each}
          {/if}
        {/each}
      {/if}
    {/each}
  {/key}
</nav>

<div class="coming-soon">
  More coming soon...
</div>

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

    &.active {
      color: $primary;
    }

    span {
      color: $text-color-dark;
      font-size: 0.85em;
      font-family: $font-family-brand;
      font-weight: normal;
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

  .coming-soon {
    padding: $margin * 0.25;
    margin-top: $margin;
    background: repeating-linear-gradient(45deg, $bg-dark, $bg-dark 4px, transparent 4px, transparent 0.75rem);
    color: $text-color-light;
    font-weight: bold;
    text-align: center;
    font-family: $font-family-brand;
  }
</style>
