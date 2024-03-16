import { addCache, getCache } from "$lib/api/cache"

const WarId = 801
const options = { headers: { "Accept-Language": "en-US" } }
const ttl = 10000

export async function fetchStatus(fetch) {
  const key = "status"
  const cached = await getCache(key, ttl)

  if (cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/Status`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    addCache(key, parsed, ttl)

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchInfo(fetch) {
  const key = "info"
  const cached = await getCache(key, ttl)

  if (cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/WarInfo`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    addCache(key, parsed, ttl)

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchNews(fetch) {
  const key = "news"
  const cached = await getCache(key, ttl)

  if (cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/NewsFeed/${WarId}`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    addCache(key, parsed, ttl)

    return parsed
  } catch (error) {
    console.error(error)
  }
}
