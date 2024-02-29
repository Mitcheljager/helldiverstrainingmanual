export function toSlug(string = "") {
  return string.toLowerCase().replaceAll(" ", "-")
}
