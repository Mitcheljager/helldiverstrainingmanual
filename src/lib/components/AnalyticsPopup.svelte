<script>
	import Popup from "$lib/components/Popup.svelte"
	import PlanetAnalytics from "$lib/components/PlanetAnalytics.svelte"
	import IconAnalytics from "$lib/components//icons/IconAnalytics.svelte"

  export let index
</script>

<Popup let:toggle>
  <button on:click|stopPropagation={toggle} aria-label="Analytics">
    <IconAnalytics />
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
