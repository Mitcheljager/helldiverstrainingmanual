export function outside(node) {
  let dragStartPosition = {}

  function down(event) {
    if (node.contains(event.target)) return
    if (!event.pageX || !event.pageY) return

    dragStartPosition = { x: event.pageX, y: event.pageY }
  }

  function up(event) {
    if (node.contains(event.target)) return

    if (event.pageX || event.pageY) {
      const dragDelta = 5
      const dragDifferenceX = Math.abs(event.pageX - dragStartPosition.x)
      const dragDifferenceY = Math.abs(event.pageY - dragStartPosition.y)

      if (dragDifferenceX > dragDelta || dragDifferenceY > dragDelta) return
    }

    node.dispatchEvent(new CustomEvent("close"))
  }

  window.addEventListener("mouseup", up, { passive: true })
  window.addEventListener("mousedown", down, { passive: true })

  return {
    destroy() {
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
    }
  }
}
