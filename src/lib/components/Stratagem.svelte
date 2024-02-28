<script>
  import Confetti from "svelte-confetti"
	import Arrow from "$lib/components/Arrow.svelte"
	import { slide } from "svelte/transition"
	import { onDestroy, onMount } from "svelte";

  export let randomize = false
  export let sequence = []

  const options = ["up", "down", "left", "right"]

  let currentIndex = 0
  let active = true
  let complete = false
  let error = false
  let currentTime = 0
  let bestTime = 0
  let interval = null

  onMount(setRandomSequence)
  onDestroy(stopTimer)

  function setRandomSequence() {
    if (!randomize) return

    const count = Math.floor(Math.random() * (10 - 4 + 1) + 4)

    sequence = []
    for (let index = 0; index < count; index++) {
      sequence = [...sequence, options[Math.floor(Math.random() * options.length)]]
    }
  }

  function addGiven({ key }) {
    if (key === "r") {
      reset()
      return
    }

    if (!active) return
    if (error) return
    if (currentIndex === sequence.length) return

    const current = sequence[currentIndex]

    if (
      (current === "up" && ["w", "ArrowUp"].includes(key)) ||
      (current === "down" && ["s", "ArrowDown"].includes(key)) ||
      (current === "left" && ["a", "ArrowLeft"].includes(key)) ||
      (current === "right" && ["d", "ArrowRight"].includes(key))) {
      correct()
    } else {
      incorrect()
    }
  }

  function correct() {
    currentIndex++;

    if (currentIndex === sequence.length) success()
    if (currentIndex === 1) startTimer()
  }

  function incorrect() {
    error = true

    if (interval) stopTimer()
  }

  function success() {
    complete = true

    if (interval) stopTimer()
  }

  function reset() {
    if (randomize && currentIndex === sequence.length) setRandomSequence()

    currentIndex = 0
    complete = false
    active = true
    error = false

    currentTime = 0
    stopTimer()
  }

  function startTimer() {
    stopTimer()
    currentTime = 0
    interval = setInterval(() => currentTime += 10, 10)
  }

  function stopTimer() {
    if (interval) clearInterval(interval)
    if (!error && currentTime && (!bestTime || currentTime < bestTime)) bestTime = currentTime
  }

  function toTime(seconds) {
    return (Math.round(seconds * 100) / 100).toFixed(2)
  }
</script>

<svelte:window on:keydown={addGiven} />

<section class="stratagem">
  <div class="codes" class:complete class:error>
    {#each sequence as direction, i}
      <Arrow {direction} filled={i < currentIndex} />
    {/each}

    {#if complete}
      <div class="confetti">
        <Confetti infinite amount={30} size={15} x={[0, 1.5]} y={[0, 1.5]} colorArray={['#6ecb89', '#53bca0']} />
        <Confetti infinite amount={30} size={15} x={[0, -1.5]} y={[0, 1.5]} colorArray={['#6ecb89', '#53bca0']} />
      </div>
    {/if}
  </div>

  {#if active}
    <div class="timer" transition:slide={{ duration: 200 }}>
      <span>Timer: {toTime(currentTime / 1000)}<small>s</small></span>

      {#if !randomize && bestTime}
        <span>Best: {toTime(bestTime / 1000)}<small>s</small></span>
      {/if}
    </div>

    <button class="button" class:active={active && !complete && !error} class:error class:complete on:click={() => active = false} transition:slide={{ duration: 200 }}>
      Reset [R]
    </button>
  {/if}

  {#if !active}
    <div class="pt-1/4" transition:slide={{ duration: 200 }} />

    <button class="button" on:click={() => active = true} transition:slide={{ duration: 200 }}>
      Start Practice
    </button>
  {/if}
</section>

<style lang="scss">
  .stratagem {
    max-width: $text-limit;
  }

  .button {
    --color: #{$primary};
    --gradient-color: #{rgba($primary, 0.25)};
    appearance: none;
    position: relative;
    display: block;
    width: 100%;
    padding: $margin * 0.25;
    border: 5px solid var(--color);
    background: repeating-linear-gradient(45deg, var(--gradient-color), var(--gradient-color) 4px, transparent 4px, transparent 0.75rem);
    cursor: pointer;
    color: var(--color);
    font-family: $font-family-alt;
    font-size: 1.35rem;
    font-weight: bolder;
    text-transform: uppercase;
    transition: color 200ms, border-color 200ms;

    &:hover {
      color: $bg-base;

      &::before {
        opacity: 1;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--color);
      opacity: 0;
      pointer-events: none;
      z-index: -1;
      transition: opacity 200ms;
    }

    &.active {
      --color: #{$bg-dark};
      --gradient-color: #{rgba($bg-dark, 0.25)};
      color: $text-color-dark;

      &:hover {
        color: $bg-base;
      }
    }

    &.complete {
      --color: #{$green};
      --gradient-color: #{rgba($green, 0.25)};
    }

    &.error {
      --color: #{$red};
      --gradient-color: #{rgba($red, 0.25)};
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 $bg-base, 0 0 0 0 $red;
    }

    100% {
      box-shadow: 0 0 0 1rem $bg-base, 0 0 0 2rem rgba($red, 0);
    }
  }

  .codes {
    position: relative;
    display: flex;
    justify-content: center;
    gap: $margin * 0.25;
    padding: $margin * 0.25;
    min-height: 1rem;
    border: 5px solid $bg-dark;
    background: darken($bg-dark, 20%);
    overflow: hidden;
    transition: color 200ms, border-color 200ms;
    color: lighten($bg-dark, 20%);

    &.complete {
      color: $green;
      border-color: $green;
    }

    &.error {
      color: $red;
      border-color: $red;
      animation: pulse 500ms;
    }
  }

  .confetti {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
  }

  .timer {
    display: flex;
    justify-content: space-between;
    padding: $margin * 0.25 0;
    font-family: $font-family-alt;
    font-size: 1.15rem;
    font-weight: bolder;
    text-transform: uppercase;
  }
</style>
