<script>
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const routes = [{
    text: "Introduction",
    route: "",
    subroutes: [{
      text: "Your first day",
      route: "your-first-day"
    }],
  }, {
    text: "Super Destroyer",
    route: "super-destroyer",
    subroutes: [{
      text: "Currencies",
      route: "currencies"
    }]
  }, {
    text: "Stratagems",
    route: "stratagems",
    subroutes: [{
      text: "Weapons",
      route: "weapons",
      subroutes: [{
        text: "Machine Gun",
        route: "machine-gun"
      }, {
        text: "Anti-Material Rifle",
        route: "anti-material-rifle"
      }, {
        text: "Stalwart",
        route: "stalwart"
      }]
    }, {
      text: "Orbital",
      route: "orbital",
      subroutes: [{
        text: "Gatling Barrage",
        route: "gatling-barrage"
      }, {
        text: "Airburst Strike",
        route: "airburst-strike"
      }]
    }]
  }]
</script>

<nav>
  {#each routes as route, i}
    <a class="route" href="/{route.route}"><span>{i}.</span> {route.text}</a>

    {#if route.subroutes}
      {#each route.subroutes as subroute, j}
        <a class="subroute" href="/{route.route}{route.route ? "/" : ""}{subroute.route}"><span>{i}{alphabet[j]}.</span> {subroute.text}</a>

        {#if subroute.subroutes}
          {#each subroute.subroutes as subsubroute, k}
            <a class="subsubroute" href="/{route.route}/{subroute.route}/{subsubroute.route}"><span>{i}{alphabet[j]}-{k}.</span> {subsubroute.text}</a>
          {/each}
        {/if}
      {/each}
    {/if}
  {/each}
</nav>

<style lang="scss">
  a {
    display: block;
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
