<script>
	import { createEventDispatcher, onDestroy, onMount } from "svelte"

  const dispatch = createEventDispatcher()

  let interval
  let gamepads = navigator.getGamepads()
  let heldButtons = []

  $: if (gamepads?.length) startPolling()
  $: if (!gamepads?.length && interval) clearInterval(interval)

  onMount(() => {
    if (gamepads?.length) dispatch("connect")
  })

  onDestroy(() => {
    if (interval) clearInterval(interval)
  })

  function connect() {
    gamepads = navigator.getGamepads()

    dispatch("connect")
  }

  async function disconnect() {
    await new Promise(res => setTimeout(res))

    gamepads = navigator.getGamepads()

    if (!gamepads?.length) dispatch("disconnect")
  }

  function startPolling() {
    setInterval(checkControls, 10)
  }

  function checkControls() {
    if (!gamepads?.length) return

    gamepads.forEach(gamepad => {
      if (!gamepad) return

      const buttons = ["ga", "gb", "gx", "gy", "lb", "rb", "lt", "rt", "map", "menu", "lstick", "rstick", "du", "dd", "dl", "dr", "xbox"]

      gamepad.buttons.forEach((button, i) => {
        if (button.pressed === (heldButtons[i] || false)) return

        heldButtons[i] = button.pressed

        if (button.pressed) {
          dispatch(buttons[i])
          dispatch("press", { key: buttons[i] })
        }
      })
    })
  }
</script>

<svelte:window on:gamepadconnected={connect} on:gamepaddisconnected={disconnect} />
