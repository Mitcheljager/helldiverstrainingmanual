<svelte:head>
  <title>Helldivers 2 API | Helldivers Training Manual</title>
</svelte:head>


<h1>Helldivers 2 API</h1>

<p>The API grants you access to real-time battle data, empowering you to spread the word of our noble cause across the galaxy. Use it to share updates, rally allies, and showcase our progress in the fight for democracy. Let's unite the galaxy in our mission to eradicate tyranny and usher in a new era of peace and democracy. Together, we can ignite the flames of liberty across the stars!</p>

<h2 class="mt-1 mb-1/2">Endpoints</h2>

<p>There are several endpoints available. Each returns data as JSON.</p>

<ul>
  <li><code>/api/v1/war/status</code> - Provides the current status of all planets along with their player count</li>
  <li><code>/api/v1/war/info</code> - Provides static info of planet listed by their index</li>
  <li><code>/api/v1/war/news</code> - Provides a news feed of messages that are delivered in-game</li>
  <li><code>/api/v1/war/campaign</code> - Provides a shorter and more ready to handle list of all current active planets</li>
  <li><code>/api/v1/war/history/[planetIndex]</code> - Provides the liberation history of a given planet. Returns the liberation status in 5 minutes intervals (with some variance). Status is only recorded when planet is active, as a result there may be big jumps between dates. Ordered from newest to latest, limited to 288 results (24 hours).</li>
  <li><code>/api/v1/planets</code> - Provides data about each planet, the first key matches the planet index</li>
</ul>

<p>The API is fairly barebones but provides all the info you need to replicate the Live War Status page and more.</p>

<h2 class="mt-1 mb-1/2">Know the risks</h2>

<p>The data comes from an official endpoint, but it's not an officially open API. It's entirely possible it will stop working at some point.</p>

<p>There is no authentication or rate limiting. Handle it with respect, soldier.</p>

<p><strong>This API is subject to change. Use at your own risk.</strong></p>

<style lang="scss">
  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin-bottom: 0.35em;
  }

  code {
    background: lighten($bg-base, 5%);
    padding: 0.25em;
  }
</style>
