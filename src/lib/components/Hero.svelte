<script>
	import { browser } from "$app/environment"
	import { fly } from "svelte/transition"

  export let basepath = ""
  export let filename = ""
  export let alt = ""
  export let video = ""
  export let poster = ""
  export let small = false

  let videoElement
  let videoPlaying = false
  let loading = false
  let loaded = false

  function playpause() {
    if (videoPlaying) videoElement.pause()
    else videoElement.play()
  }
</script>

<div class="hero" class:small in:fly|global={{ x: -20, duration: 400 }}>
  {#if basepath && filename}
    <picture>
      <source type="image/webp" srcset="{basepath}/webp/{filename + ".webp"}"  />
      <source type="image/jpg" srcset="{basepath}/{filename + ".jpg"}">
      <img src="{basepath}/{filename}.jpg" {alt}>
    </picture>
  {:else if video}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      {poster}
      src={video}
      muted
      playsinline
      loop
      preload="none"
      bind:this={videoElement}
      on:click={playpause}
      on:waiting={() => loading = true}
      on:playing={() => { videoPlaying = true; loading = false }}
      on:pause={() => videoPlaying = false} />

    <button class="play" on:click={playpause}>
      {#if loading}
        <svg class="loading" width="50px" height="50px" viewBox="0 0 16 16">
          <path d="M7.706 0.290 C 7.484 0.362,7.356 0.490,7.294 0.699 C 7.259 0.816,7.253 1.088,7.253 2.508 C 7.253 4.389,7.251 4.365,7.443 4.557 C 7.700 4.813,8.300 4.813,8.557 4.557 C 8.749 4.365,8.747 4.389,8.747 2.508 C 8.747 0.688,8.744 0.656,8.596 0.480 C 8.472 0.333,8.339 0.284,8.040 0.276 C 7.893 0.272,7.743 0.278,7.706 0.290 M2.753 2.266 C 2.595 2.338,2.362 2.566,2.281 2.728 C 2.197 2.897,2.193 3.085,2.269 3.253 C 2.343 3.418,4.667 5.750,4.850 5.843 C 5.109 5.976,5.375 5.911,5.643 5.649 C 5.907 5.391,5.977 5.111,5.843 4.850 C 5.750 4.667,3.418 2.343,3.253 2.269 C 3.101 2.200,2.901 2.199,2.753 2.266 M12.853 2.282 C 12.730 2.339,12.520 2.536,11.518 3.541 C 10.597 4.464,10.316 4.762,10.271 4.860 C 10.195 5.025,10.196 5.216,10.272 5.378 C 10.342 5.528,10.572 5.764,10.727 5.845 C 10.884 5.927,11.117 5.926,11.280 5.843 C 11.447 5.757,13.757 3.447,13.843 3.280 C 13.926 3.118,13.927 2.884,13.846 2.729 C 13.764 2.572,13.552 2.364,13.392 2.283 C 13.213 2.192,13.048 2.192,12.853 2.282 M0.699 7.292 C 0.404 7.385,0.258 7.620,0.258 7.999 C 0.259 8.386,0.403 8.618,0.698 8.706 C 0.816 8.741,1.079 8.747,2.508 8.747 C 3.997 8.747,4.196 8.742,4.318 8.702 C 4.498 8.644,4.644 8.498,4.702 8.318 C 4.788 8.053,4.745 7.677,4.608 7.491 C 4.578 7.451,4.492 7.384,4.417 7.343 L 4.280 7.267 2.547 7.261 C 1.152 7.257,0.791 7.263,0.699 7.292 M11.745 7.278 C 11.622 7.308,11.452 7.411,11.392 7.492 C 11.255 7.677,11.212 8.053,11.298 8.318 C 11.356 8.498,11.502 8.644,11.682 8.702 C 11.804 8.742,12.003 8.747,13.492 8.747 C 14.921 8.747,15.184 8.741,15.302 8.706 C 15.597 8.618,15.741 8.386,15.742 7.999 C 15.742 7.614,15.595 7.383,15.290 7.291 C 15.187 7.260,14.864 7.254,13.496 7.256 C 12.578 7.258,11.790 7.268,11.745 7.278 M4.853 10.282 C 4.730 10.339,4.520 10.536,3.518 11.541 C 2.597 12.464,2.316 12.762,2.271 12.860 C 2.195 13.025,2.196 13.216,2.272 13.378 C 2.342 13.528,2.572 13.764,2.727 13.845 C 2.884 13.927,3.117 13.926,3.280 13.843 C 3.447 13.757,5.757 11.447,5.843 11.280 C 5.926 11.118,5.927 10.884,5.846 10.729 C 5.764 10.572,5.552 10.364,5.392 10.283 C 5.213 10.192,5.048 10.192,4.853 10.282 M10.753 10.266 C 10.595 10.338,10.362 10.566,10.281 10.728 C 10.197 10.897,10.193 11.085,10.269 11.253 C 10.343 11.418,12.667 13.750,12.850 13.843 C 13.109 13.976,13.375 13.911,13.643 13.649 C 13.907 13.391,13.977 13.111,13.843 12.850 C 13.750 12.667,11.418 10.343,11.253 10.269 C 11.101 10.200,10.901 10.199,10.753 10.266 M7.745 11.277 C 7.620 11.309,7.451 11.412,7.392 11.492 C 7.254 11.678,7.253 11.691,7.253 13.489 C 7.253 14.921,7.259 15.184,7.294 15.302 C 7.382 15.597,7.615 15.741,8.000 15.741 C 8.385 15.741,8.618 15.597,8.706 15.302 C 8.768 15.090,8.767 11.875,8.704 11.690 C 8.644 11.514,8.575 11.430,8.420 11.346 C 8.310 11.286,8.246 11.271,8.057 11.264 C 7.930 11.259,7.790 11.265,7.745 11.277 " stroke="none" fill-rule="evenodd" fill="#000000"></path>
        </svg>
      {:else if videoPlaying}
        <svg width="50px" height="50px" viewBox="0 0 32 32">
          <path d="M8,7h6v18H8V7z M18,7v18h6V7H18z"/>
        </svg>
      {:else}
        <svg height="50px" width="50px" viewBox="0 0 17.804 17.804">
          <path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" />
          <path d="M11,3613 L13,3613 L13,3605 L11,3605 L11,3613 Z M15,3613 L17,3613 L17,3605 L15,3605 L15,3613 Z" />
        </svg>
      {/if}
    </button>
  {/if}

  {#if $$slots["content"]}
    <div class="content">
      <slot name="content" />
    </div>
  {/if}
</div>

{#if $$slots.default}
  <h1 class:small in:fly|global={{ y: 20, duration: 400 }}><slot /></h1>
{/if}

{#if browser}
  {#if basepath && filename}
    <picture>
      <source type="image/webp" srcset="{basepath}/webp/{filename + ".webp"}"  />
      <source type="image/jpg" srcset="{basepath}/{filename + ".jpg"}">
      <img src="{basepath}/{filename}.jpg" class="blur" class:loaded {alt} on:load={() => loaded = true}>
    </picture>
  {:else if video && poster}
    <img class="blur" class:loaded src={poster} {alt} on:load={() => loaded = true}>
  {/if}
{/if}

<style lang="scss">
  h1 {
    position: relative;
    margin: $margin * 0.5 0;

    @include breakpoint(md) {
      margin: calc(-1em + $margin * -0.5) 0 $margin;
    }

    &.small {
      @include breakpoint(md) {
        margin: calc(-1em + $margin * -0.5) $margin * 0.5 $margin;
      }
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

    &.small {
      height: clamp(12rem, 20vw, 17rem);
      max-width: $text-limit;
      margin: 0;
    }

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
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        background: lighten($bg-base, 5%);
      }
    }

    svg {
      width: 100%;
      height: auto;

      path {
        fill: $white;
      }
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    animation: spin 1000ms infinite;
  }
</style>
