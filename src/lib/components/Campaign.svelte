<script>
	import CampaignItem from "$lib/components/CampaignItem.svelte"
	import { flip } from "svelte/animate";

  export let formattedCampaigns = []
  export let stacked = false
</script>

<div class="items">
  {#each formattedCampaigns as campaign (campaign.planetIndex)}
    <div animate:flip={{ duration: 1000 }}>
      <CampaignItem {stacked} {...campaign} />
    </div>
  {/each}
</div>

<style lang="scss">
  .items {
    display: block;
  }
</style>
