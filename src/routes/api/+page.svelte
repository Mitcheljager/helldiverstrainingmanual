<script>
	import Expand from "$lib/components/Expand.svelte";
	import { Timeframe } from "$lib/data/timeframe";

  const basepath = "https://helldiverstrainingmanual.com"
</script>

<svelte:head>
  <title>Helldivers 2 API | Helldivers Training Manual</title>
</svelte:head>

<h1>Helldivers 2 API</h1>

<p>The API grants you access to real-time battle data, empowering you to spread the word of our noble cause across the galaxy. Use it to share updates, rally allies, and showcase our progress in the fight for democracy. Let's unite the galaxy in our mission to eradicate tyranny and usher in a new era of peace and democracy. Together, we can ignite the flames of liberty across the stars!</p>

<h2 class="mt-1 mb-1/2">Endpoints</h2>

<p>There are several endpoints available. Each returns data as JSON.</p>
<div class="items">
  <div class="item">
    <code class="url">{basepath}/api/v1/war/status</code>
    Provides the current status of all planets along with their player count. This is returned as is from an official endpoint.

    <Expand let:toggle>
      <button on:click={toggle}>Toggle example response</button>
      <pre class="example" slot="content">
        &#123;
          "warId": 801,
          "time": 3100001,
          "impactMultiplier": 0.0010056561,
          "storyBeatId32": 961985913,
          "planetStatus": [&#123;
            "index": 0,
            "owner": 1,
            "health": 1000000,
            "regenPerSecond": 1388.8889,
            "players":1630
          &#125;, &#123;
            "index": 1,
            "owner": 1,
            "health": 1000000,
            "regenPerSecond": 1388.8889,
            "players": 0
          &#125;,
          ...]
        &#125;
      </pre>
    </Expand>
  </div>

  <div class="item">
    <code class="url">{basepath}/api/v1/war/info</code>
    Provides static info of planet listed by their index.  This is returned as is from an official endpoint.

    <Expand let:toggle>
      <button on:click={toggle}>Toggle example response</button>
      <pre class="example" slot="content">
        &#123;
          "warId": 801,
          "startDate": 1706040313,
          "endDate": 1833653095,
          "minimumClientVersion": "0.3.0",
          "planetInfos": [&#123;
            "index": 0,
            "settingsHash": 897386910,
            "position": &#123;
              "x": 0,
              "y": 0
            &#125;,
            "waypoints": [1],
            "sector": 0,
            "maxHealth": 1000000,
            "disabled": false,
            "initialOwner": 1
          &#125;, &#123;
            "index": 1,
            "settingsHash": 3621417917,
            "position": &#123;
              "x": 0.05373042,
              "y": 0.10565466
            &#125;,
            "waypoints": [2],
            "sector": 1,
            "maxHealth": 1000000,
            "disabled": false,
            "initialOwner": 1
          &#125;,
          ...]
        &#125;
      </pre>
    </Expand>
  </div>

  <div class="item">
    <code class="url">{basepath}/api/v1/war/news</code>
    Provides a news feed of messages that are delivered in-game. Only 10 items are returned at a time, from oldest to newest. This means you might miss out on newer items if there are more than 10 lined up. You can pass <code>?from=[time]</code> to retrieve news from a certain time. This time should match the time given in other endpoints such as <code>/status</code> and <code>/info</code>. This is returned as is from an official endpoint.

    <Expand let:toggle>
      <button on:click={toggle}>Toggle example response</button>
      <pre class="example" slot="content">
        [&#123;
          "id": 2804,
          "published": 2822793,
          "type": 0,
          "tagIds": [],
          "message": "FENRIR III SECURED\nThe Terminid Control System is now fully activated on Fenrir III."
        &#125;,
        &#123;
          "id": 2805,
          "published": 2899259,
          "type": 0,
          "tagIds": [],
          "message": "TURING SECURED\nThe Terminid Control System is now fully activated on Turing."
        &#125;,
        ...]
      </pre>
    </Expand>
  </div>

  <div class="item">
    <code class="url">{basepath}/api/v1/war/campaign</code>
    Provides a shorter and more ready to handle list of all current active planets.

    <Expand let:toggle>
      <button on:click={toggle}>Toggle example response</button>
      <pre class="example" slot="content">
        [&#123;
          "planetIndex": 169,
          "name": "Estanu",
          "faction": "Terminids",
          "players": 247207,
          "health": 66933,
          "maxHealth": 1000000,
          "percentage": 93.3067,
          "defense": false,
          "majorOrder": false,
          "biome": &#123;
            "slug": "icemoss",
            "description": "Ice and moss-covered rock can be found across most of the surface of this planet."
          &#125;,
          "expireDateTime": null
        &#125;, &#123;
          "planetIndex": 153,
          "name": "Draupnir",
          "faction": "Automatons",
          "players": 63198,
          "health": 241046,
          "maxHealth": 1000000,
          "percentage": 75.8954,
          "defense": false,
          "majorOrder": false,
          "biome": &#123;
            "slug": "highlands",
            "description": "Rocky outcroppings punctuate fields of tall grass in a planet dominated by misty highland terrain."
          &#125;,
          "expireDateTime": null
        &#125;, ...]
      </pre>
    </Expand>
  </div>

  <div class="item">
    <code class="url">{basepath}/api/v1/war/history/[planetIndex]</code>
    Provides the liberation history of a given planet. Returns the liberation status in 5 minutes intervals (with some variance). Status is only recorded when planet is active, as a result there may be big jumps between dates. Ordered from newest to latest, limited to 288 results (24 hours). The limit can be adjusting using <code>?timeframe=[{Timeframe.Short}|{Timeframe.Day}]</code>. <code>{Timeframe.Short}</code> Returns only 2 records. The options <code>week</code> and <code>month</code> are in the works but are not currently available.

    <Expand let:toggle>
      <button on:click={toggle}>Toggle example response</button>
      <pre class="example" slot="content">
        [&#123;
          "created_at": "2024-03-13T22:00:23.039181+00:00",
          "planet_index": 125,
          "current_health": 2999,
          "max_health": 1000000,
          "player_count": 197857
        &#125;, &#123;
          "created_at": "2024-03-13T21:55:07.143707+00:00",
          "planet_index": 125,
          "current_health": 11360,
          "max_health": 1000000,
          "player_count": 199197
        &#125;, ...]
      </pre>
    </Expand>
  </div>

  <div class="item">
    <code class="url">{basepath}/api/v1/planets</code>
    Provides data about each planet, the first key matches the planet index.<br>
    The data includes information about the conditions and type of planet. The type of planet is listed as <code>biome</code>. The names of the biomes are <em>not</em> names from the game, they are made up. Some biomes will be <code>null</code> because the type is not known yet. Environmentals almost always match the biome. For example, a desert biome will always have Intense Heat and Tremors. The only exception to this currently is Tien Kwan. More exceptions could happen in the future, which is why Environmentals are listed separately from the Biome itself.

    <Expand let:toggle>
      <button on:click={toggle}>Toggle example response</button>
      <pre class="example" slot="content">
        &#123;
          "0": &#123;
            "name": "Super Earth",
            "sector": "Sol",
            "biome": null,
            "environmentals": []
          &#125;,
          "1": &#123;
            "name": "Klen Dahth II",
            "sector": "Altus",
            "biome": null,
            "environmentals": [&#123;
              "name": "Intense Heat",
              "description": "High temperatures increase stamina drain and speed up heat buildup in weapons"
            &#125;, &#123;
              "name": "Sandstorms",
              "description": ""
            &#125;]
          &#125;,
          "2": &#123;
            "name": "Pathfinder V",
            "sector": "Altus",
            "biome": &#123;
              "slug": "highlands",
              "description": "Rocky outcroppings punctuate fields of tall grass in a planet dominated by misty highland terrain."
            &#125;,
            "environmentals": [&#123;
              "name": "Thick Fog",
              "description": ""
            &#125;, &#123;
              "name": "Rainstorms",
              "description": "Torrential rainstorms reduce visibility"
            &#125;]
          &#125;,
          ...
        &#125;
      </pre>
    </Expand>
  </div>
</div>

<h2 class="mt-1 mb-1/2">Know the risks</h2>

<p>The data comes from an official endpoint, but it's not an officially open API. It's entirely possible it will stop working at some point.</p>

<p>There is no authentication or rate limiting. Handle it with respect, soldier.</p>

<p><strong>This API is subject to change. Use at your own risk.</strong></p>

<style lang="scss">
  button {
    @include reset-button();
    display: block;
    margin-top: $margin * 0.25;
    padding: $margin * 0.15;
    background: lighten($bg-base, 10%);
    font-family: $font-family;
    font-size: 0.85em;
    color: $text-color-light;

    &:hover {
      color: $white;
    }
  }

  code {
    background: lighten($bg-base, 5%);
    padding: 0.25em;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
    max-width: $text-limit;
  }

  .item {
    padding: $margin * 0.25;
    border: 5px solid $bg-dark;
  }

  .url {
    display: block;
    width: calc(100% + $margin * 0.5);
    margin: $margin * -0.25 $margin * -0.25 $margin * 0.25;
    padding: $margin * 0.25;
    overflow-x: auto;
    white-space: nowrap;
    color: $white;
  }

  .example {
    background: darken($bg-base, 5%);
    overflow-x: auto;
    margin: $margin * 0.25 0 0;
  }
</style>
