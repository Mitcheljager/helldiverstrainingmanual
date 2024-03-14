<script>
  import { browser } from "$app/environment"
	import { onDestroy, tick } from "svelte"
	import { fade, slide } from "svelte/transition"
	import { toSlug } from "$lib/utils/route"
	import { stratagems } from "$lib/data/stratagems"
  import Confetti from "svelte-confetti"
	import Arrow from "$lib/components/Arrow.svelte"
	import Select from "$lib/components/Select.svelte"
	import GamepadControls from "$lib/components/GamepadControls.svelte"
	import Switch from "$lib/components/Switch.svelte"
	import QuestionMark from "$lib/components/QuestionMark.svelte"
	import OnScreenControls from "$lib/components/OnScreenControls.svelte"

  export let stratagem = ""

  const options = ["up", "down", "left", "right"]
  const randomLabel = "Random Sequence"
  const challengeSeconds = 20
  const infiniteLabel = `${challengeSeconds} Second Challenge`
  const maxArrowsShown = 20

  let currentIndex = 0
  let active = false
  let complete = false
  let error = false
  let currentTime = 0
  let currentScore = 0
  let bestScore = 0
  let interval = null
  let gamepadActive = false
  let hideSequence = false
  let showControls = false
  let arrowWidth = null
  let lastTime = 0

  $: stratagemOptions = stratagems.map(i => i.items).flat(1).map(i => ({ text: i.name, value: i.sequence, icon: `/images/stratagems/${toSlug(i.name)}.svg` }))
  $: extraOptions = [{ text: randomLabel, value: getRandomSequence() }, { text: infiniteLabel, value: [] }]
  $: selectOptions = [...extraOptions, ...stratagemOptions]
  $: selectValue = selectOptions.find(i => i.text === stratagem)
  $: randomize = selectValue?.text === randomLabel
  $: infinite = selectValue?.text === infiniteLabel
  $: sequence = selectValue?.value || []

  onDestroy(stopTimer)

  function getRandomSequence(max = 10, min = 4) {
    const count = Math.floor(Math.random() * (max - min + 1) + min)

    let random = []
    for (let index = 0; index < count; index++) {
      random = [...random, getRandomDirection()]
    }

    return random
  }

  function getRandomDirection() {
    return options[Math.floor(Math.random() * options.length)]
  }

  function addGiven(event) {
    const { key } = event

    if (key === "r" || key === "ga") {
      reset()
      return
    }

    if (!active) return
    if (complete) return
    if (error) return
    if (currentIndex === sequence.length) return
    if (!["w", "ArrowUp", "du", "s", "ArrowDown", "dd", "a", "ArrowLeft", "dl", "d", "ArrowRight", "dr"].includes(key)) return

    event?.preventDefault()

    const current = sequence[currentIndex]

    if (
      (current === "up" && ["w", "ArrowUp", "du"].includes(key)) ||
      (current === "down" && ["s", "ArrowDown", "dd"].includes(key)) ||
      (current === "left" && ["a", "ArrowLeft", "dl"].includes(key)) ||
      (current === "right" && ["d", "ArrowRight", "dr"].includes(key))) {
      correct()
    } else {
      incorrect()
    }
  }

  function correct() {
    currentIndex++;

    if (currentIndex === sequence.length) success()
    if (currentIndex === 1) startTimer()
    if (infinite) sequence = [...sequence, getRandomDirection()]
    if (infinite) currentScore++
  }

  function incorrect() {
    error = true

    if (interval) stopTimer()
  }

  function success() {
    complete = true

    if (interval) stopTimer()
  }

  async function reset() {
    if (randomize && currentIndex === sequence.length) selectValue = { text: randomLabel, value: getRandomSequence() }
    if (infinite && currentIndex) sequence = []

    currentIndex = 0
    complete = false
    active = true
    error = false

    currentTime = 0
    currentScore = 0
    stopTimer()

    await tick()

    if (infinite) while (sequence.length < maxArrowsShown + currentIndex) sequence = [...sequence, getRandomDirection()]
  }

  function startTimer() {
    stopTimer()
    currentTime = 0
    lastTime = 0

    increaseTimer()
  }

  function increaseTimer() {
    if (interval) cancelAnimationFrame(interval)
    if (infinite && currentTime > challengeSeconds * 1000) {
      currentTime = challengeSeconds * 1000
      success()
      return
    }

    const time = new Date().getTime()

    currentTime += time - (lastTime || time)
    lastTime = time

    interval = requestAnimationFrame(increaseTimer)
  }

  function stopTimer() {
    if (interval) cancelAnimationFrame(interval)

    if (infinite && currentTime && (!bestScore || currentScore > bestScore)) bestScore = currentScore
    if (!infinite && !error && currentTime && (!bestScore || currentTime < bestScore)) bestScore = currentTime
  }

  function toTime(seconds) {
    return (Math.round(seconds * 100) / 100).toFixed(2)
  }

  function change({ detail }) {
    selectValue = detail
    bestScore = 0
    reset()
  }
</script>

<svelte:window on:keydown={addGiven} />

{#if browser}
  <GamepadControls on:connect={() => gamepadActive = true} on:disconnect={() => gamepadActive = false} on:press={({ detail }) => addGiven(detail)} />
{/if}

<h3 class="mb-1/2">Stratagem Practice</h3>

<section class="stratagem">
  <div class="mb-1/4">
    <Select up options={selectOptions} value={selectValue} on:change={change} />
  </div>

  <div class="codes" class:complete class:error class:infinite style:--index={currentIndex} style:--arrow-width="{arrowWidth}px" style:--offset-count={Math.max(maxArrowsShown / -2 + currentIndex, 0)}>
    <div class="positioner">
      {#if hideSequence && currentIndex !== sequence.length}
        {#each { length: currentIndex + 1 } as _}
          <QuestionMark />
        {/each}
      {:else}
        {#each sequence as direction, i}
          {#if !infinite || (infinite && i >= currentIndex - maxArrowsShown / 2)}
            <Arrow {direction} filled={i < currentIndex} bind:width={arrowWidth} />
          {/if}
        {/each}
      {/if}

      {#if complete}
        <div class="confetti">
          <Confetti infinite amount={30} size={15} x={[0, 1.5]} y={[0, 1.5]} colorArray={['#6ecb89', '#53bca0']} />
          <Confetti infinite amount={30} size={15} x={[0, -1.5]} y={[0, 1.5]} colorArray={['#6ecb89', '#53bca0']} />
        </div>
      {/if}
    </div>
  </div>

  {#if active}
    <div class="timer" transition:slide={{ duration: 200 }}>
      <span class="score">
        <span>Time: {#if error}Fail{:else}{toTime(currentTime / 1000)}<small>s</small>{/if}</span>

        {#if currentScore}
          <span>Score: {currentScore}</span>
        {/if}
      </span>

      {#if !randomize && bestScore}
        <span class="best" class:highlighted={currentTime === bestScore || (currentScore && currentScore === bestScore)}>
          {#if infinite}
            Best: {bestScore}
          {:else}
            Best: {toTime(bestScore / 1000)}<small>s</small>
          {/if}
        </span>
      {/if}
    </div>

    <button class="button" class:active={active && !complete && !error} class:error class:complete on:click={reset} transition:slide={{ duration: 200 }}>
      Reset [R]
      {#if gamepadActive}
        - Gamepad [A]
      {/if}
    </button>
  {/if}

  {#if !active}
    <div class="pt-1/4" transition:slide={{ duration: 200 }} />

    <button class="button" on:click={() => active = true} transition:slide={{ duration: 200 }}>
      Start Practice
    </button>
  {/if}

  <div class="switches mt-1/4">
    <Switch bind:active={hideSequence}>
      Hide sequence
    </Switch>

    <Switch bind:active={showControls}>
      Show on-screen controls
    </Switch>
  </div>

  <em class="tip">Tip: Prefer the liberty of a controller? No problem! Press [A] to get started.</em>
</section>

{#if showControls}
  <div transition:fade={{ duration: 100 }}>
    <OnScreenControls on:click={({ detail }) => addGiven(detail)} />
  </div>
{/if}

<style lang="scss">
  .stratagem {
    max-width: $text-limit;
    margin-bottom: 7rem;
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

  .positioner {
    --gap: #{$margin * 0.15};
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--gap);

    .infinite & {
      flex-wrap: nowrap;
      justify-content: flex-start;
      margin-left: calc(50% - var(--arrow-width));
      padding-left: max(calc((var(--arrow-width) + var(--gap)) * var(--offset-count)), 1px);
      transform: translateX(calc((var(--arrow-width) + var(--gap)) * var(--index) * -1));
      transition: transform 100ms;
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
    font-size: 1rem;
    font-weight: bolder;
    text-transform: uppercase;

    @include breakpoint(sm) {
      font-size: 1.15rem;
    }

    small {
      font-size: 0.8em;
      line-height: 1em;
    }

    .highlighted {
      color: $green;
    }
  }

  .score {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @include breakpoint(sm) {
      flex-direction: row;
      gap: $margin * 0.5;
    }

    span {
      display: block;
    }
  }

  .best {
    text-align: right;
    white-space: nowrap;
  }

  .switches {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $margin * 0.25 $margin * 0.5;
  }

  .tip {
    display: block;
    margin-top: $margin * 0.15;
    font-size: 0.8rem;
    color: lighten($text-color-dark, 10%);
    text-align: center;
  }
</style>
