<script>
  import { outside } from "$lib/actions/outside"
	import { createEventDispatcher } from "svelte"
	import { fly } from "svelte/transition"

  export let options = []
  export let value = {}
  export let up = false
  export let small = false

  const dispatch = createEventDispatcher()

  let active = false

  function change(option) {
    value = option

    dispatch('change', value)
  }
</script>

<button class="select" class:small use:outside on:close={() => active = false} on:click={() => active = !active}>
  {#if value.icon}
    <img loading="lazy" src={value.icon} alt="" />
  {/if}

  {value.text}

  {#if active}
    <div class="dropdown" class:up transition:fly={{ y: -10, duration: 100 }}>
      {#each options as option}
        <button class="item" class:active={option.text === value.text} on:click={() => change(option)}>
          {#if option.icon}
            <img loading="lazy" src={option.icon} alt="" height="30" width="30" />
          {/if}

          {option.text}
        </button>
      {/each}
    </div>
  {/if}
</button>

<style lang="scss">
  .select {
    appearance: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $margin * 0.25;
    width: 100%;
    padding: $margin * 0.15 $margin * 0.25;
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

    &.small {
      width: auto;
      padding: $margin * 0.1 $margin * 0.25;
      border-width: 3px;
      font-size: 1rem;
    }

    img {
      height: 2em;
      width: auto;
    }
  }

  .dropdown {
    position: absolute;
    left: -5px;
    bottom: calc($margin * -0.25 - 5px);
    transform: translateY(100%);
    padding: $margin * 0.25;
    width: calc(100% + 10px);
    min-width: 10rem;
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

    .small & {
      left: -3px;
      padding: $margin * 0.15;
      border-width: 3px;
    }
  }

  .item {
    appearance: none;
    display: flex;
    align-items: center;
    gap: $margin * 0.25;
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

    .small & {
      font-size: 1rem;
    }

    img {
      height: 1.5em;
    }
  }
</style>
