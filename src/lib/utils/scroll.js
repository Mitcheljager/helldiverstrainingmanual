export function getScrollParent(node) {
  if (!node) return null

  const parentNode = node.parentNode

  if (!parentNode) return null
  if (parentNode === document) return document.documentElement.scrollHeight > window.innerHeight ? document.documentElement : null

  const overflowY = window.getComputedStyle(parentNode).overflowY
  if (overflowY === "auto" || overflowY === "scroll") return parentNode

  return getScrollParent(parentNode)
}
