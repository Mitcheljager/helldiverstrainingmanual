<script>
	import Popup from "$lib/components/Popup.svelte"
	import PlanetAnalytics from "$lib/components/PlanetAnalytics.svelte"

  export let index
</script>

<Popup let:toggle>
  <button on:click|stopPropagation={toggle} aria-label="Analytics">
    <svg fill="currentColor" width="16px" height="16px" viewBox="0 0 1920 1920">
      <path d="M746.667 106.667H1173.33V1493.33H746.667V106.667ZM533.333 533.333H106.667V1493.33H533.333V533.333ZM1920 1706.67H0V1824H1920V1706.67ZM1813.33 746.667H1386.67V1493.33H1813.33V746.667Z"/>
    </svg>
  </button>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div slot="content" on:click|stopPropagation>
    <PlanetAnalytics {index} />
  </div>
</Popup>

<style lang="scss">
  button {
    appearance: none;
    border: 0;
    padding: 0;
    height: auto;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
      background: rgba($black, 0.25);
      box-shadow: 0 0 0 0.25rem rgba($black, 0.25);
    }
  }
</style>
