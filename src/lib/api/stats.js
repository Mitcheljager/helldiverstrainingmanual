import { addCache, getCache } from "$lib/api/cache"

const ttl = 300000

export async function fetchStats(fetch) {
  const key = "stats"
  const cached = await getCache(key)

  if (cached) return cached

  try {
    const response = await fetch("https://api.diveharder.com/raw/planet_stats",
                                 {
                                   headers: {
                                     "User-Agent": "Helldivers Training Manual",
                                     "X-Super-Client": "Helldivers Training Manual",
                                     "X-Super-Contact": "@mitsiee || gh/Mitcheljager"
                                   },
                                   redirect: "follow"
                                 })

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    addCache(key, parsed, ttl)

    return parsed
  } catch (error) {
    console.error(error)
  }
}
