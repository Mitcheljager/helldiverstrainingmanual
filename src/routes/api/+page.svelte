<h1>API</h1>

<p>The API grants you access to real-time battle data, empowering you to spread the word of our noble cause across the galaxy. Use it to share updates, rally allies, and showcase our progress in the fight for democracy. Let's unite the galaxy in our mission to eradicate tyranny and usher in a new era of peace and democracy. Together, we can ignite the flames of liberty across the stars!</p>

<ul>
  <li><code>/api/v1/war/status</code> - Provides the current status of all planets along with their player count</li>
  <li><code>/api/v1/war/info</code> - Provides static info of planet listed by their index</li>
  <li><code>/api/v1/war/planets</code> - Provides names for each planet, matching the index given from previous endpoints</li>
  <li><code>/api/v1/war/campaign</code> - Provides a shorter and more ready to handle list of all current active planets</li>
</ul>

<p>The API is fairly barebones but provides all the info you need to replicate the Live War Status page and more.</p>

<p>The data comes from an official endpoint, but it's not an officially open API. It's entirely possible it will stop working at some point.</p>

<p>There is no authentication or rate limiting. Handle it with respect, soldier.</p>

<p>This API is subject to change. Use at your own risk.</p>

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
