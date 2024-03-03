<script>
	import { createEventDispatcher, onDestroy, onMount } from "svelte"

  const dispatch = createEventDispatcher()

  let poll
  let heldButtons = []

  onMount(() => {
    if (!getGamepads()?.length) return

    dispatch("connect")
    checkControls()
  })

  onDestroy(() => {
    if (poll) cancelAnimationFrame(poll)
  })

  function getGamepads() {
    return navigator.getGamepads()
  }

  function connect() {
    checkControls()

    dispatch("connect")
  }

  async function disconnect() {
    await new Promise(res => setTimeout(res))

    if (getGamepads()?.length) return

    dispatch("disconnect")
    cancelAnimationFrame(poll)
  }

  function checkControls() {
    const gamepads = getGamepads()

    if (!gamepads?.length) return

    const buttons = ["ga", "gb", "gx", "gy", "lb", "rb", "lt", "rt", "map", "menu", "lstick", "rstick", "du", "dd", "dl", "dr", "xbox"]

    gamepads.forEach(gamepad => {
      if (!gamepad) return

      gamepad.buttons.forEach((button, i) => {
        if (button.pressed === (heldButtons[i] || false)) return

        heldButtons[i] = button.pressed

        if (button.pressed) {
          dispatch(buttons[i])
          dispatch("press", { key: buttons[i] })
        }
      })
    })

    poll = requestAnimationFrame(checkControls)
  }
</script>

<svelte:window on:gamepadconnected={connect} on:gamepaddisconnected={disconnect} />
