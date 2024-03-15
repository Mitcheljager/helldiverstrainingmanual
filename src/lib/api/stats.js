const CacheTimeout = 60000
const cache = { datetime: Date.now(), result: null }

function useCache() {
  if (!cache?.result) return false
  if (Date.now() - cache?.datetime > CacheTimeout) return false

  return true
}

export async function fetchStats(fetch) {
  if (useCache()) return cache.result

  try {
    const response = await fetch("https://api.diveharder.com/raw/planetStats")

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    cache.datetime = Date.now()
    cache.result = parsed

    return parsed
  } catch (error) {
    console.error(error)
  }
}
