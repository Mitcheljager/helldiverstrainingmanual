<script>
	import CampaignItem from "$lib/components/CampaignItem.svelte"

  export let formattedCampaigns = []
  export let stacked = false
</script>

<div class="items">
  {#each formattedCampaigns as campaign}
    <CampaignItem {stacked} {...campaign} />
  {/each}
</div>

<style lang="scss">
  .items {
    display: block;
  }
</style>
