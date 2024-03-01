<script>
	import { invalidateAll } from "$app/navigation"
	import Hero from "$lib/components/Hero.svelte";
	import { factions } from "$lib/data/factions.js";
	import { planetNames } from "$lib/data/planets"
	import { formatCampaigns } from "$lib/utils/campaign.js";
	import { onDestroy, onMount } from "svelte"

  export let data

  let interval

  $: ({ status, info } = data)
  $: ({ globalEvents, campaigns, planetStatus } = (status || {}))
  $: ({ planetInfos } = (info || {}))
  $: formattedCampaigns = formatCampaigns(campaigns, planetStatus, planetInfos)

  onMount(() => interval = setInterval(invalidateAll, 10000) )
  onDestroy(() => { if (interval) clearInterval(interval) })
</script>

<svelte:head>
  <title>Live War Status | Helldivers Training Manual</title>
</svelte:head>

<Hero src="/images/content/war-status.jpg">
  War Status: Helldiver's War Efforts
</Hero>

<p>In the unyielding crucible of battle, every engagement shapes the destiny of our war effort. Here, amidst the chaos of conflict, we track the pulse of victory, monitoring our progress, celebrating our triumphs, and confronting our challenges head-on.</p>

<p>In the vast expanse of the galaxy, our battles are not fought alone. Together, as one united force, Helldivers from every corner of the universe stand shoulder to shoulder, confronting the greatest threats to our freedom and democracy.</p>

<p><em><small>This section updates automatically</small></em></p>

<h2 class="mt-1 mb-1/2">Global Events</h2>

{#if globalEvents}
  <div class="items">
    {#each globalEvents as { title, message }}
      <div class="item">
        <h3>{title}</h3>
        <p class="content">
          {#if message}
            {message}
          {:else}
            <em>No message was provided</em>
          {/if}
        </p>
      </div>
    {/each}
  </div>
{:else}
  <p>Failed to retrieve global events</p>
{/if}

<h2 class="mt-1 mb-1/4">Active Efforts</h2>

<div class="items">
  {#each formattedCampaigns as { name, faction, percentage, players }}
    <div class="item {faction.toLowerCase()}">
      <h3>{name || "Unknown Planet"} <small>{faction}</small></h3>

      <div class="content">
        <div class="bar">
          <div class="progress" style:width="{percentage}%" />
        </div>

        <div class="info">
          <span>{percentage ? percentage.toFixed(4) : 0}% Liberated</span>
          <span>{players.toLocaleString()} Helldivers</span>
        </div>
      </div>
    </div>
  {/each}
</div>

<div class="api">
  <h5 class="mt-1 mb-1/2">API</h5>

  <p>The API grants you access to real-time battle data, empowering you to spread the word of our noble cause across the galaxy. Use it to share updates, rally allies, and showcase our progress in the fight for democracy. Let's unite the galaxy in our mission to eradicate tyranny and usher in a new era of peace and democracy. Together, we can ignite the flames of liberty across the stars!</p>

  <ul>
    <li><code>/api/v1/war/status</code> - Provides the current status of all planets along with their player count</li>
    <li><code>/api/v1/war/info</code> - Provides static info of planet listed by their index</li>
    <li><code>/api/v1/war/planets</code> - Provides names for each planet, matching the index given from previous endpoints</li>
    <li><code>/api/v1/war/campaign</code> - Provides a shorter and more ready to handle list of all current active planets</li>
  </ul>

  <p>The API is fairly barebones but provides all the info you need to replicate this page and more. There is no authentication or rate limiting. Handle it with respect, soldier.</p>
</div>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.5;
  }

  .item {
    --border-color: #{$bg-dark};
    --background-color: #{lighten($bg-base, 5%)};
    max-width: $text-limit;
    border: 5px solid var(--border-color);

    h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: $margin * 0.25;
      margin: 0;
      background: var(--background-color);
      padding: $margin * 0.25;

      small {
        opacity: 0.75;
        color: var(--border-color);
        font-size: 0.65em;
      }
    }

    &.terminids {
      --border-color: #{$terminids};
      --background-color: #{rgba($terminids, 0.25)};
    }

    &.automatons {
      --border-color: #{$automatons};
      --background-color: #{rgba($automatons, 0.25)};
    }
  }

  .content {
    margin: 0;
    padding: $margin * 0.25;
    font-size: 1rem;
    line-height: 1.45em;
  }

  .bar {
    height: 2rem;
    background: var(--border-color);
  }

  @keyframes progress {
    from {
      width: 0;
    }
  }

  .progress {
    background: $super-earth;
    height: 100%;
    animation: progress 1000ms forwards;
  }

  .info {
    display: flex;
    justify-content: space-between;
    gap: $margin * 0.5;
    margin-top: $margin * 0.25;
    font-family: $font-family-alt;
    font-weight: bold;
    font-size: 0.85rem;
    line-height: 1em;

    span:last-child {
      text-align: right;
    }
  }

  .api {
    font-size: 1rem;
    line-height: 1.45em;

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
  }
</style>
