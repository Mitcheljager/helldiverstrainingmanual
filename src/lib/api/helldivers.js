import { addCache, getCache } from "$lib/api/cache"

const WarId = 801
const options = { headers: { "Accept-Language": "en-US" } }

export async function fetchStatus(fetch, { bypassCache = false } = {}) {
  const key = "status"
  const cached = await getCache(key, { storeOnly: false })

  if (!bypassCache && cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/Status`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    if (parsed?.planetStatus?.length) addCache(key, parsed, 20000, { storeOnly: false })

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchInfo(fetch, { bypassCache = false } = {}) {
  const key = "info"
  const cached = await getCache(key, { storeOnly: false })

  if (!bypassCache && cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/WarInfo`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()

    // Delete the "settingsHash" key from each planet as the value compresses poorly while not providing anything useful
    parsed.planetInfos.forEach(p => delete p.settingsHash)

    if (parsed?.planetInfos?.length) addCache(key, parsed, 300000, { storeOnly: false })

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchNews(fetch, from = 0) {
  const key = "news"
  const cached = await getCache(key, { storeOnly: false })

  if (cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/NewsFeed/${WarId}?fromTimeStamp=${from}`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    addCache(key, parsed, 120000, { storeOnly: false })

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchMajorOrders(fetch) {
  const key = "major-orders"
  const cached = await getCache(key, { storeOnly: false })

  if (cached) return cached

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/v2/Assignment/War/${WarId}`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    addCache(key, parsed, 120000, { storeOnly: false })

    return parsed
  } catch (error) {
    console.error(error)
  }
}
