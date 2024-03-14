<script>
	import { onMount } from "svelte"
	import { browser } from "$app/environment"
  import { DirectionalLight, HemisphereLight, PerspectiveCamera, Scene, WebGLRenderer, Sphere, Box3, Vector3 } from "three"
  import { OBJLoader, OrbitControls } from "three/examples/jsm/Addons.js"

  let width
  let element
  let scene
  let camera
  let renderer

	onMount(async () => {
    if (browser) createScene()
  })

  function createScene() {
    scene = new Scene()

    camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    // @ts-ignore
    camera.position.z = 5

    renderer = new WebGLRenderer({ antialias: true, canvas: element })
    renderer.setClearColor(0x000000, 0)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    addLights()
    resize()
    animate()
    loadModel()
  }

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  function resize() {
    renderer.setSize(width, width / 2)
    camera.aspect = width / (width / 2)
    camera.updateProjectionMatrix()
  }

  function addLights() {
    const directionalLight = new DirectionalLight(0xffffff)
    // @ts-ignore
    directionalLight.position.set(-10, 10, -10).normalize()
    scene.add(directionalLight)

    const hemisphereLight = new HemisphereLight(0xffffff, 0x444444)
    // @ts-ignore
    hemisphereLight.position.set(1, 1, 1)
    scene.add(hemisphereLight)
  }

  function loadModel() {
    const objLoader = new OBJLoader()

    objLoader.load("/models/charger.obj", (object) => {
      object.position.y = -0.75
      object.rotation.y = 90

      scene.add(object)
    }, (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
    }, (error) => console.log(error))
  }
</script>

<svelte:window on:resize={resize} />


<div class="model-viewer">
  <canvas bind:this={element} />

  <img class="background" src="/images/biomes/desert.jpg" alt="" />
  <div class="sizer" bind:clientWidth={width} />
</div>

<style lang="scss">
  .sizer {
    width: 100%;
  }

  .model-viewer {
    position: relative;
    max-width: $text-limit * 1.5;
    border: 5px solid $white;
    overflow: hidden;

    @include breakpoint(md) {
      margin: 0 $margin * -0.5;
    }
  }

  .background {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    object-fit: cover;
    z-index: -1;
    filter: blur(2rem);
    opacity: 0.25;
  }
</style>
