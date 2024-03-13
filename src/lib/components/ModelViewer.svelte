<script>
	import { onMount } from "svelte"
	import { browser } from "$app/environment"
  import * as THREE from 'three'
  import { DirectionalLight, HemisphereLight, PerspectiveCamera, Scene, WebGLRenderer } from "three"
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
    renderer.setSize(width, width / 1.5)
    camera.aspect = width / (width / 1.5)
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

      // Add the object to the scene
      scene.add(object)

      // Compute bounding box of the loaded object
      const boundingBox = new THREE.Box3().setFromObject(object)

      // Calculate the center of the bounding box
      const center = new THREE.Vector3()
      boundingBox.getCenter(center)

      // Calculate the radius of the bounding sphere
      const sphere = new THREE.Sphere()
      boundingBox.getBoundingSphere(sphere)
      const radius = sphere.radius

      // Set camera position and target to ensure the model is fully visible
      const viewSize = radius * 2
      const fov = camera.fov * (Math.PI / 180)
      let distance = Math.abs(viewSize / Math.sin(fov / 2))

      // Adjust camera position
      const direction = new THREE.Vector3()
      camera.getWorldDirection(direction)
      const newPosition = center.clone().add(direction.clone().multiplyScalar(distance))
      camera.position.copy(newPosition)
      camera.lookAt(center)
    }, (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
    }, (error) => console.log(error))
  }
</script>

<svelte:window on:resize={resize} />

<div class="sizer" bind:clientWidth={width} />

<canvas bind:this={element} />

<style lang="scss">
  .sizer {
    max-width: $text-limit * 1.5;
  }
</style>
