import { apiCache } from "$lib/stores/cache"

const WarId = 801
const options = { headers: { "Accept-Language": "en-US" } }

export async function fetchStatus(fetch) {
  const key = "status"
  const cached = apiCache.check(key)

  if (cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/Status`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    apiCache.set(key, parsed)

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchInfo(fetch) {
  const key = "info"
  const cached = apiCache.check(key)

  if (cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/WarInfo`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    apiCache.set(key, parsed)

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchNews(fetch) {
  const key = "news"
  const cached = apiCache.check(key)

  if (cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/NewsFeed/${WarId}`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    apiCache.set(key, parsed)

    return parsed
  } catch (error) {
    console.error(error)
  }
}
