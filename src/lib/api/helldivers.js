import { get, writable } from "svelte/store"

const WarId = 801
const CacheTimeout = 20000

const statusCache = writable({ datetime: Date.now(), result: null })
const infoCache = writable({ datetime: Date.now(), result: null })

function useCache(store) {
  if (!get(store)?.result) return false
  if (Date.now() - get(store)?.datetime > CacheTimeout) return false

  return true
}

export async function fetchStatus(fetch) {
  if (useCache(statusCache)) return get(statusCache).result

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/Status`)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = response.json()
    statusCache.set({ datetime: Date.now(), result: parsed })

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchInfo(fetch) {
  if (useCache(infoCache)) return get(infoCache).result

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/WarInfo`)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = response.json()
    infoCache.set({ datetime: Date.now(), result: parsed })

    return parsed
  } catch (error) {
    console.error(error)
  }
}
