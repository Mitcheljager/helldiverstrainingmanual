import { addCache, getCache } from "./cache"

export async function api(path, serverFetch = null) {
  try {
    const cached = getCache(path)
    if (cached) return cached

    const response = await (serverFetch || fetch)(`/api/v1/${path}`)
    const parsed = await response.json()

    if (parsed) addCache(path, parsed, 10000)

    return parsed
  } catch (error) {
    console.error(error)
    return null
  }
}
