<script>
	import { invalidateAll } from "$app/navigation"
	import CampaignItem from "$lib/components/CampaignItem.svelte";
	import Hero from "$lib/components/Hero.svelte"
	import Map from "$lib/components/Map.svelte";
	import Switch from "$lib/components/Switch.svelte"
	import { formatCampaigns } from "$lib/utils/campaign.js"
	import { onDestroy, onMount } from "svelte"

  export let data

  let dataInterval
  let compact = true

  $: ({ status, info } = data)
  $: ({ globalEvents, campaigns, planetStatus, planetEvents } = (status || {}))
  $: ({ planetInfos } = (info || {}))
  $: formattedCampaigns = formatCampaigns(campaigns, planetStatus, planetInfos, planetEvents)

  onMount(() => {
    dataInterval = setInterval(invalidateAll, 10000)
  })

  onDestroy(() => {
    if (dataInterval) clearInterval(dataInterval)
  })
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
  {#each formattedCampaigns as campaign}
    <CampaignItem {compact} {planetInfos} {...campaign} />
  {/each}
</div>

<h2>Galaxy Map</h2>

<Map planets={planetInfos} campaigns={formattedCampaigns} />

<h2>Global Events</h2>

{#if globalEvents}
  <div class="items">
    {#each globalEvents as { title, message }}
      <div class="item">
        <h3>{title || "Unknown"}</h3>
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
    max-width: $text-limit;
    border: 5px solid $bg-dark;

    h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: $margin * 0.15;
      margin: 0;
      background-color: lighten($bg-base, 5%);
      padding: $margin * 0.25;
      transition: font-size 200ms, padding 200ms;
      word-break: break-word;
    }
  }

  .content {
    margin: 0;
    padding: $margin * 0.25;
    font-size: 1rem;
    line-height: 1.45em;
    transition: padding 200ms;
  }
</style>
