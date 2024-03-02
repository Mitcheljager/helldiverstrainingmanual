<script>
  import Confetti from "svelte-confetti"
	import Arrow from "$lib/components/Arrow.svelte"
	import { slide } from "svelte/transition"
	import { onDestroy } from "svelte"
	import Select from "$lib/components/Select.svelte"
	import { stratagems } from "$lib/data/stratagems"

  export let stratagem = ""

  const options = ["up", "down", "left", "right"]
  const randomLabel = "Random Sequence"

  let currentIndex = 0
  let active = false
  let complete = false
  let error = false
  let currentTime = 0
  let bestTime = 0
  let interval = null

  $: stratagemOptions = stratagems.map(i => i.items).flat(1).map(i => ({ text: i.name, value: i.sequence }))
  $: extraOptions = [{ text: randomLabel, value: getRandomSequence() }]
  $: selectOptions = [...extraOptions, ...stratagemOptions]
  $: selectValue = selectOptions.find(i => i.text === stratagem)
  $: randomize = stratagem === randomLabel
  $: sequence = selectValue?.value || []

  onDestroy(stopTimer)

  function getRandomSequence() {
    const count = Math.floor(Math.random() * (10 - 4 + 1) + 4)

    let random = []
    for (let index = 0; index < count; index++) {
      random = [...random, options[Math.floor(Math.random() * options.length)]]
    }

    return random
  }

  function addGiven({ key }) {
    if (key === "r") {
      reset()
      return
    }

    if (!active) return
    if (error) return
    if (currentIndex === sequence.length) return
    if (!["w", "ArrowUp", "s", "ArrowDown", "a", "ArrowLeft", "d", "ArrowRight"].includes(key)) return

    event?.preventDefault()

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
    if (randomize && currentIndex === sequence.length) {
      console.log('set')
      selectValue = { text: randomLabel, value: getRandomSequence() }
    }

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

<h3 class="mb-1/2">Stratagem Practice</h3>

<section class="stratagem">
  <div class="mb-1/4">
    <Select up options={selectOptions} value={selectValue} on:change={({ detail }) => selectValue = detail} />
  </div>

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
      <span>Timer: {#if error}Fail{:else}{toTime(currentTime / 1000)}<small>s</small>{/if}</span>

      {#if !randomize && bestTime}
        <span class:highlighted={currentTime === bestTime}>Best: {toTime(bestTime / 1000)}<small>s</small></span>
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
    flex-wrap: wrap;
    gap: $margin * 0.15;
    padding: $margin * 0.25;
    min-height: 1rem;
    border: 5px solid $bg-dark;
    background: darken($bg-dark, 20%);
    overflow: hidden;
    transition: color 200ms, border-color 200ms;
    color: lighten($bg-dark, 20%);

    @include breakpoint(sm) {
      gap: $margin * 0.25;
    }

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

    small {
      font-size: 0.8em;
      line-height: 1em;
    }

    .highlighted {
      color: $green;
    }
  }
</style>
