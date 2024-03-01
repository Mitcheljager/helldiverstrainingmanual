<script>
	import { browser } from "$app/environment"
	import { fly } from "svelte/transition"

  export let src = ""
  export let video = ""
  export let alt = ""

  let videoElement
  let videoPlaying = false
  let loaded = false

  function playpause() {
    if (videoPlaying) videoElement.pause()
    else videoElement.play()
  }
</script>

<div class="hero" in:fly={{ x: -20, duration: 400 }}>
  {#if src}
    <img {src} {alt}>
  {:else if video}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src={video} muted playsinline bind:this={videoElement} on:playing={() => videoPlaying = true} on:pause={() => videoPlaying = false} />

    <button class="play" on:click={playpause}>
      {#if videoPlaying}
        <svg width="500px" height="500px" viewBox="0 0 32 32">
          <path class="sharpcorners_een" d="M8,7h6v18H8V7z M18,7v18h6V7H18z"/>
        </svg>
      {:else}
        <svg height="50px" width="50px" viewBox="0 0 17.804 17.804">
          <path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" />
          <path d="M11,3613 L13,3613 L13,3605 L11,3605 L11,3613 Z M15,3613 L17,3613 L17,3605 L15,3605 L15,3613 Z" />
        </svg>
      {/if}
    </button>
  {/if}
</div>

{#if $$slots.default}
  <h1 in:fly|global={{ y: 20, duration: 400 }}><slot /></h1>
{/if}

{#if browser}
  {#if src}
    <img class="blur" class:loaded {src} {alt} on:load={() => loaded = true}>
  {:else if video}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="blur" class:loaded src={video} muted on:loadeddata={() => loaded = true} />
  {/if}
{/if}

<style lang="scss">
  h1 {
    position: relative;
    margin: $margin * 0.5 0;

    @include breakpoint(md) {
      margin: calc(-1em + $margin * -0.5) 0 $margin;
    }
  }

  .hero {
    position: relative;
    height: clamp(15rem, 20vw, 20rem);
    max-width: $text-limit * 1.5;
    margin: $margin * -0.5 $margin * -0.5 0;
    border: 5px solid $primary;
    background: lighten($bg-base, 5%);
    overflow: hidden;

    img,
    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @include breakpoint(md) {
      margin: $margin * -0.5;
    }
  }

  .play {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: $margin * 0.25;
    right: $margin * 0.25;
    width: 5rem;
    height: 5rem;
    padding: $margin * 0.4;
    border: 5px solid $primary;
    background: $bg-base;
    border-radius: 50%;
    z-index: 10;

    svg {
      width: 100%;
      height: auto;

      path {
        fill: $white;
      }
    }
  }

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    height: 30rem;
    max-width: $text-limit * 1.5;
    width: 100%;
    opacity: 0;
    filter: blur(100px);
    z-index: -1;
    transition: opacity 1500ms;
    pointer-events: none;

    &.loaded {
      opacity: 0.5;
    }
  }
</style>
