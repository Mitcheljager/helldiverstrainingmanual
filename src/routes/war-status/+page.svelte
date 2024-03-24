<script>
	import { browser } from "$app/environment"
	import { formatCampaigns } from "$lib/utils/campaign"
	import { onDestroy, onMount } from "svelte"
	import { api } from "$lib/api/api"
	import Hero from "$lib/components/Hero.svelte"
	import Map from "$lib/components/Map.svelte"
	import Campaign from "$lib/components/Campaign.svelte"
	import FullscreenMap from "$lib/components/FullscreenMap.svelte"
	import WarStatistics from "$lib/components/WarStatistics.svelte"
	import News from "$lib/components/News.svelte"
	import MajorOrder from "$lib/components/MajorOrders.svelte";

  export let data

  let statusInterval
  let infoInterval
  let statsInterval
  let fullscreen = false

  $: ({ status, info, stats } = data)
  $: ({ planetStatus, planetEvents } = (status || {}))
  $: ({ planetInfos } = (info || {}))
  $: ({ galaxy_stats: galaxyStats } = (stats || {}))
  $: formattedCampaigns = formatCampaigns(status, info)

  onMount(() => {
    if (!browser) return

    statusInterval = setInterval(async () => status = await api("war/status") || {}, 20000)
    infoInterval = setInterval(async () => info = await api("war/info") || {}, 300000)
    statsInterval = setInterval(async () => galaxyStats = await api(`war/stats`) || {}, 60000)
  })

  onDestroy(() => {
    if (statusInterval) clearInterval(statusInterval)
    if (infoInterval) clearInterval(infoInterval)
    if (statsInterval) clearInterval(statsInterval)
  })
</script>

<svelte:head>
  <title>Live War Status | Helldivers Training Manual</title>
</svelte:head>

<Hero basepath="/images/content" filename="war-status">
  War Status: Helldivers' War Efforts
</Hero>

<p>In the unyielding crucible of battle, every engagement shapes the destiny of our war effort. Here, amidst the chaos of conflict, we track the pulse of victory, monitoring our progress, celebrating our triumphs, and confronting our challenges head-on.</p>

<p>In the vast expanse of the galaxy, our battles are not fought alone. Together, as one united force, Helldivers from every corner of the universe stand shoulder to shoulder, confronting the greatest threats to our freedom and democracy.</p>

<p><em><small>This section updates automatically</small></em></p>

{#if !Object.keys(status).length || !Object.keys(info).length}
  <div class="item no-connection mt-1">
    <h3>Connections are down!</h3>
    <p class="content">We could not connect to the outside world. No data was able to be retrieved.</p>
  </div>
{/if}

<h2>Active Efforts</h2>

<Campaign {formattedCampaigns} />

{#if Object.keys(status)?.length === 0}
  <em>No data was found</em>
{/if}

<h2>Galactic Map</h2>

<Map planets={planetInfos} status={planetStatus} campaigns={formattedCampaigns} events={planetEvents} on:fullscreen={() => fullscreen = !fullscreen} />

<h2>War Statistics</h2>

<p class="mt-1/2 mb-1/2">May the effort of those who came before us not be forgotten. May the efforts of those who have given all to Democracy not be in vain. Appreciate who they are, as they are more than mere statistics. They are the true heroes, those who came before us.</p>

{#if Object.values(galaxyStats || {})?.length}
  <WarStatistics stats={galaxyStats} />
{:else}
  <div class="item no-connection mt-1">
    <h3>Lost but not forgotten</h3>
    <p class="content">Statistics are temporarily not available. Despite that, the efforts are not in vain, let that be certain.</p>
  </div>
{/if}

<h2>Major Orders</h2>

<MajorOrder />

<h2>Recent Events</h2>

{#if browser}
  <News from={status.time - 432000} /> <!-- 5 days ago -->
{:else}
  Loading...
{/if}

{#if fullscreen}
  <FullscreenMap {planetInfos} {planetStatus} {formattedCampaigns} on:fullscreen={() => fullscreen = !fullscreen} />
{/if}

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

  .item {
    max-width: $text-limit;
    border: 5px solid $bg-dark;

    &.no-connection {
      border-color: $red;

      h3 {
        background-color: darken($red, 25%);
      }
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: $margin * 0.15;
      margin: 0;
      background-color: lighten($bg-base, 5%);
      padding: $margin * 0.25;
      word-break: break-word;
    }
  }

  .content {
    margin: 0;
    padding: $margin * 0.25;
    font-size: 1rem;
    line-height: 1.45em;
  }
</style>
