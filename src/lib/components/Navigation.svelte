<script>
	import { stratagems } from "$lib/data/stratagems"
  import { page } from "$app/stores"
	import { toPath } from "$lib/utils/route";

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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
    subroutes: [{
      text: "Planetary Ownership Records",
      route: "planetary-records"
    }]
  }, {
    text: "Stratagems",
    subroutes: [{
        text: "Interactive Practice",
      },
      ...stratagemRoutes
    ]
  }]

  function isActive(array = []) {
    return $page.url.pathname === toPath(array)
  }
</script>

<nav>
  {#key $page.url.pathname}
    {#each routes as route, i}
      <a class="route" class:active={isActive([route.route || route.text])} href={route.route === "" ? "/" : toPath([route.route || route.text])}><span>{i}.</span> {route.text}</a>

      {#if route.subroutes}
        {#each route.subroutes as subroute, j}
          <a class="subroute" class:active={isActive([route.route || route.text, subroute.route || subroute.text])} href={toPath([route.route || route.text, subroute.route || subroute.text])}><span>{i}{alphabet[j]}.</span> {subroute.text}</a>

          {#if subroute.subroutes}
            {#each subroute.subroutes as subsubroute, k}
              <a class="subsubroute" class:active={isActive([route.route || route.text, route.route || subroute.text, subsubroute.text])} href={toPath([route.route || route.text, subroute.route || subroute.text, subsubroute.text])}><span>{i}{alphabet[j]}-{k}.</span> {subsubroute.text}</a>
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

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
