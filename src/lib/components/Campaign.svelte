<script>
	import CampaignItem from "$lib/components/CampaignItem.svelte"
	import { flip } from "svelte/animate"
	import { fly } from "svelte/transition"

  export let formattedCampaigns = []
  export let stacked = false
</script>

<div class="items">
  {#each formattedCampaigns as campaign (campaign.planetIndex)}
    <div animate:flip={{ duration: 1000 }} out:fly={{ y: -200, duration: 1000 }}>
      <CampaignItem {stacked} {...campaign} />
    </div>
  {/each}
</div>

<style lang="scss">
  .items {
    display: flex;
    flex-direction: column;
    gap: $margin * 0.25;
  }
</style>
