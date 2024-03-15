const WarId = 801
const CacheTimeout = 10000

const statusCache = { datetime: Date.now(), result: null }
const infoCache = { datetime: Date.now(), result: null }
const newsCache = { datetime: Date.now(), result: null }

const options = { headers: { "Accept-Language": "en-US" } }

function useCache(obj) {
  if (!obj?.result) return false
  if (Date.now() - obj?.datetime > CacheTimeout) return false

  return true
}

export async function fetchStatus(fetch) {
  if (useCache(statusCache)) return statusCache.result

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/Status`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    statusCache.datetime = Date.now()
    statusCache.result = parsed

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchInfo(fetch) {
  if (useCache(infoCache)) return infoCache.result

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/WarInfo`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    infoCache.datetime = Date.now()
    infoCache.result = parsed

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchNews(fetch) {
  if (useCache(newsCache)) return newsCache.result

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/NewsFeed/${WarId}`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    newsCache.datetime = Date.now()
    newsCache.result = parsed

    return parsed
  } catch (error) {
    console.error(error)
  }
}
