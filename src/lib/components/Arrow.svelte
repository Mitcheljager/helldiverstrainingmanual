<script>
  export let filled = false
  export let direction = "right"
  export let width = null
</script>

<div class="arrow {direction}" class:filled bind:clientWidth={width}>
  {#if filled}
    <svg height="50px" width="50px" viewBox="0 0 26.774 26.774">
      <path d="M26.396,13.917l-9.979,8.254c0,0-1.186,1.255-1.186-0.103c0-1.364,0-4.654,0-4.654s-0.801,0-2.026,0
        c-3.51,0-9.899,0-12.498,0c0,0-0.707,0.183-0.707-0.89c0-1.071,0-5.779,0-6.547c0-0.765,0.593-0.746,0.593-0.746
        c2.526,0,9.129,0,12.522,0c1.103,0,1.819,0,1.819,0s0-2.64,0-4.299c0-1.656,1.239-0.405,1.239-0.405s9.327,7.025,10.304,8.002
        C27.189,13.238,26.396,13.917,26.396,13.917z"/>
    </svg>
  {:else}
    <svg height="50px" width="50px" viewBox="0 0 198.204 198.204">
      <path d="M114.799,168.906c-1.582,0-5.261-0.716-5.261-7.383v-30.624H8.181
        c-0.279,0.043-0.655,0.082-1.102,0.082c-1.8,0-3.464-0.68-4.688-1.933C0.805,127.427,0,124.947,0,121.686V74.614
        c0-6.51,4.617-8.231,7.057-8.231h100.34V38.317c0-7.848,3.736-9.019,5.962-9.019c3.572,0,7.129,3.396,7.805,4.08
        c2.441,1.8,66.982,50.455,74.075,57.541c2.577,2.58,3.028,5.175,2.956,6.893c-0.172,4.134-3.357,6.947-3.715,7.258
        l-71.792,59.413C121.91,165.334,118.267,168.906,114.799,168.906z M7.437,125.215l0.476,0.004h107.301v36.3
        c0,0.716,0.057,1.21,0.118,1.535c0.916-0.437,2.426-1.585,3.493-2.716l72.01-59.624c0.426-0.372,1.646-1.75,1.7-3.16
        c0.025-0.859-0.401-1.718-1.299-2.623c-6.811-6.803-73.116-56.778-73.782-57.283c-1.492-1.449-3.26-2.595-4.008-2.666
        c0.032,0.14-0.361,0.981-0.361,3.335v33.741H7.086C6.152,72.094,5.68,72.957,5.68,74.61v47.076c0,2.412,0.591,3.203,0.769,3.389
        c0.068,0.068,0.225,0.229,0.63,0.229L7.437,125.215z"/>
    </svg>
  {/if}
</div>

<style lang="scss">
  svg {
    display: block;
    width: clamp(40px, 10vw, 50px);
    height: auto;
  }

  path {
    fill: currentColor;
  }

  .arrow {
    &.up {
      transform: rotate(-90deg);
    }

    &.left {
      transform: rotate(-180deg);
    }

    &.down {
      transform: rotate(-270deg);
    }
  }
</style>
