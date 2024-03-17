export function toSlug(string = "") {
  return string.toLowerCase().replaceAll(" ", "-")
}

export function toPath(array = []) {
  const prepend = array[0].startsWith("/") ? "" : "/"
  return prepend + array.map(string => toSlug(string)).join("/")
}
