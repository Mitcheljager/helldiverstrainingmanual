import { addCache, getCache } from "$lib/api/cache"
import { api } from "./api"

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
    return await api(`war/stats/${index}`)
  } catch (error) {
    console.error(error)
  }
}
