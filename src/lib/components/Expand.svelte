<script>
	import { slide } from "svelte/transition"

  let active = false

  function toggle() {
    active = !active
  }
</script>

<slot {active} {toggle} />

{#if active}
  <div transition:slide={{ duration: 200 }}>
    <slot name="content" />
  </div>
{/if}
