<script>
	import CampaignItem from "$lib/components/CampaignItem.svelte"

  export let formattedCampaigns = []
  export let compact = true
</script>

<div class="items" class:compact>
  {#each formattedCampaigns as campaign}
    <CampaignItem {compact} {...campaign} />
  {/each}
</div>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.5;

    &.compact {
      display: block;
    }
  }
</style>
