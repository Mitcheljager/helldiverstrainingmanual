import { campaignStatusHistory } from "$lib/stores/data"
import { get, writable } from "svelte/store"

const WarId = 801
const CacheTimeout = 20000

const statusCache = writable({ datetime: Date.now(), result: null })
const infoCache = writable({ datetime: Date.now(), result: null })

const options = { headers: { "Accept-Language": "en-US" } }

let lastCampaignEntry = 0

function useCache(store) {
  if (!get(store)?.result) return false
  if (Date.now() - get(store)?.datetime > CacheTimeout) return false

  return true
}

export async function fetchStatus(fetch) {
  if (useCache(statusCache)) return get(statusCache).result

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/Status`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    statusCache.set({ datetime: Date.now(), result: parsed })

    saveCampaignStatusHistory(parsed)

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchInfo(fetch) {
  if (useCache(infoCache)) return get(infoCache).result

  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/WarInfo`, options)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()
    infoCache.set({ datetime: Date.now(), result: parsed })

    return parsed
  } catch (error) {
    console.error(error)
  }
}

export async function fetchHistory(planetIndex) {
  try {
    const response = await fetch(`/api/v1/war/history/${planetIndex}`)

    if (!response.ok) throw new Error("Network response was not ok")

    const parsed = await response.json()

    return parsed || {}
  } catch (error) {
    console.error(error)
  }
}

function saveCampaignStatusHistory(data) {
  if (!data?.planetStatus?.length) return
  if (!data?.campaigns?.length) return

  const { planetStatus, campaigns } = data
  const now = Date.now()

  if ((now - lastCampaignEntry) / 1000 < 300) return // Only add a new entry every 5 minutes

  campaigns.forEach(campaign => {
    const campaignHistory = get(campaignStatusHistory)[campaign.planetIndex] || {}
    const planet = planetStatus.find(p => p.index === campaign.planetIndex)

    while (Object.entries(campaignHistory).length >= 200) {
      const oldestEntryTime = Math.min(...Object.keys(campaignHistory).map(k => parseInt(k)))
      delete campaignHistory[oldestEntryTime]
    }

    const { health, players, index } = planet
    campaignHistory[Date.now()] = { index, health, players }

    campaignStatusHistory.update(() => ({
      ...get(campaignStatusHistory),
      [campaign.planetIndex]: campaignHistory
    }))
  })

  lastCampaignEntry = now
}
