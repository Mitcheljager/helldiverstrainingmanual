export function toSlug(string = "") {
  return string.toLowerCase().replaceAll(" ", "-")
}

export function toPath(array = []) {
  return "/" + array.map(string => toSlug(string)).join("/")
}
