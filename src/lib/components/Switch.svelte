<script>
	import { browser } from "$app/environment"
	import { onMount } from "svelte"

  export let active = false
  export let remember = false
  export let key = ""

  onMount(() => {
    if (browser && remember) getStateFromLocalStorage()
  })

  function getStateFromLocalStorage() {
    active = window.localStorage.getItem(key) === "true"
  }

  function setStateToLocalStorage() {
    window.localStorage.setItem(key, active.toString())
  }

  function toggle() {
    active = !active

    setStateToLocalStorage()
  }
</script>

<button class:active on:click={toggle}>
  <div class="label"><slot /></div>
  <div class="switch">
    <div class="knob" />
  </div>
</button>

<style lang="scss">
  button {
    appearance: none;
    display: flex;
    align-items: center;
    gap: $margin * 0.25;
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    font-family: $font-family-brand;
    font-size: 1rem;
    color: $text-color;
    cursor: pointer;
  }

  .switch {
    position: relative;
    width: 4rem;
    height: 1.5rem;
    padding: 0.25rem;
    border: 5px solid $bg-dark;
    transition: border-color 100ms;

    .active & {
      border-color: $white;
    }
  }

  .knob {
    display: block;
    content: "";
    height: 100%;
    width: 1rem;
    background: lighten($bg-dark, 10%);
    pointer-events: none;
    z-index: 0;
    transition: margin-left 200ms, background-color 100ms;

    .active & {
      margin-left: 1.85rem;
      background: $white;
    }
  }
</style>
