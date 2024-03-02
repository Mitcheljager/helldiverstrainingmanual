<script>
  import { outside } from "$lib/actions/outside"
	import { createEventDispatcher } from "svelte"
	import { fly } from "svelte/transition"

  export let options = []
  export let value = {}
  export let up = false

  const dispatch = createEventDispatcher()

  let active = false

  function change(option) {
    value = option

    dispatch('change', value)
  }
</script>

<button class="select" use:outside on:close={() => active = false} on:click={() => active = !active}>
  {value.text}

  {#if active}
    <div class="dropdown" class:up transition:fly={{ y: -10, duration: 100 }}>
      {#each options as option}
        <button class="item" class:active={option.text === value.text} on:click={() => change(option)}>{option.text}</button>
      {/each}
    </div>
  {/if}
</button>

<style lang="scss">
  .select {
    appearance: none;
    position: relative;
    width: 100%;
    padding: $margin * 0.25;
    border: 5px solid $bg-dark;
    background: $bg-base;
    color: $white;
    font-family: $font-family-brand;
    font-size: 1.35rem;
    text-align: center;
    cursor: pointer;

    &:hover {
      border-color: lighten($bg-dark, 10%);
    }
  }

  .dropdown {
    position: absolute;
    left: -5px;
    bottom: calc($margin * -0.25 - 5px);
    transform: translateY(100%);
    padding: $margin * 0.25;
    width: calc(100% + 10px);
    max-height: 20rem;
    border: 5px solid $bg-dark;
    background: lighten($bg-base, 5%);
    overflow-y: auto;
    z-index: 10;

    @include styled-scrollbar();

    &.up {
      top: calc($margin * -0.25 - 5px);
      bottom: auto;
      transform: translateY(-100%);
    }
  }

  .item {
    appearance: none;
    width: 100%;
    border: 0;
    background: transparent;
    color: $white;
    font-family: $font-family-brand;
    font-size: 1.25rem;
    text-align: center;
    cursor: pointer;

    &:hover,
    &.active {
      background: darken($bg-dark, 10%);
    }
  }
</style>
