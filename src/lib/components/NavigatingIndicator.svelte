<script>
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { navigating } from "$app/stores";

  let isNavigating = false;
  let done = false;

  beforeNavigate(() => {
    // Only show navigating indicator for requests that take a little longer than expected
    setTimeout(() => {
      if (!$navigating) return

      isNavigating = true;
      done = false;
    }, 100)
  });

  afterNavigate(({ from }) => {
    if (!from) return;
    if (!isNavigating) return;

    isNavigating = false;
    done = true;

    setTimeout(() => {
      done = false;
    }, 200);
  });
</script>

<div class="bar" class:navigating={isNavigating} class:done></div>

<style lang="scss">
  .bar {
    position: fixed;
    height: 0.25rem;
    width: 0;
    background: $primary;
    z-index: 1000;
    animation: none;

    &::after {
      content: "";
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(to right, transparent, lighten($primary, 30%));
      height: 100%;
      width: 2rem;
      filter: blur(5px);
    }
  }

  .navigating,
  .done {
    transition: width 200ms;

    &::after {
      display: block;
    }
  }

  @keyframes fake-load {
    0% {
      width: 0%;
    }

    1% {
      width: 20%;
    }

    100% {
      width: 80%;
    }
  }

  .navigating {
    animation: fake-load 20000ms linear;
  }

  .done {
    width: 100%;
  }
</style>
