import { addCache, getCache } from "$lib/api/cache"

const ttl = 60000

export async function fetchStats(fetch) {
  const key = "stats"
  const cached = await getCache(key, ttl)

  if (cached) return cached

  try {
    const response = await fetch("https://api.diveharder.com/raw/planetStats?source=trainingmanual-3")

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    addCache(key, parsed, ttl)

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchStatsForPlanet(index) {
  try {
    const response = await fetch(`/api/v1/war/stats/${index}`)
    const parsed = await response.json()

    return parsed
  } catch (error) {
    console.error(error)
  }
}
