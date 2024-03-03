<script>
	import { invalidateAll } from "$app/navigation"
	import Hero from "$lib/components/Hero.svelte"
	import Map from "$lib/components/Map.svelte";
	import Switch from "$lib/components/Switch.svelte";
	import { formatCampaigns } from "$lib/utils/campaign.js"
	import { onDestroy, onMount } from "svelte"

  export let data

  let interval
  let compact = true

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

<h2>
  <div>Active Efforts</div>

  <Switch bind:active={compact}>
    Compact view
  </Switch>
</h2>

<div class="items" class:compact>
  {#each formattedCampaigns as { index, name, faction, percentage, players }}
    <div class="item {faction.toLowerCase()}" data-index={index}>
      <h3>
        <div>{name || "Unknown Planet"}</div>
        <small>{faction}</small>
      </h3>

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

<h2>Galaxy Map</h2>

<Map planets={planetInfos} campaigns={formattedCampaigns} />

<h2>Global Events</h2>

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

  <p>The data comes from an official endpoint, but it's not an officially open API. It's entirely possible it will stop working at some point.</p>
</div>

<style lang="scss">
  h2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: $margin * 0.25;
    width: 100%;
    margin: $margin 0 $margin * 0.25;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.5;

    &.compact {
      display: block;
    }
  }

  .item {
    --border-color: #{$bg-dark};
    --background-color: #{lighten($bg-base, 5%)};
    max-width: $text-limit;
    border: 5px solid var(--border-color);
    transition: border 200ms;

    .compact & {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      border: 0 solid transparent;
      margin-top: $margin * 0.25;
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: $margin * 0.25;
      margin: 0;
      background: var(--background-color);
      padding: $margin * 0.25;
      transition: font-size 200ms, padding 200ms;

      .compact & {
        height: 100%;
        padding: $margin * 0.15 $margin * 0.25;
        font-size: 1.15rem;
      }

      div {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        height: 1.15em;
        overflow: hidden;
        line-break: anywhere;
      }

      small {
        opacity: 0.75;
        color: var(--border-color);
        font-size: 0.65em;

        .compact & {
          display: none;
        }
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
    transition: padding 200ms;

    .compact & {
      width: 100%;
      padding: 0 0 0 $margin * 0.25;
    }
  }

  .bar {
    height: 2rem;
    background: var(--border-color);
    transition: height 200ms;

    .compact & {
      height: 1rem;
    }
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
    transition: font-size 200ms;

    .compact & {
      font-size: 0.75rem;
    }

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
