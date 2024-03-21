import { supabase } from "$lib/db"
import { api } from "$lib/api/api"
import { addCache, getCache } from "$lib/api/cache"

export async function fetchHistory(planetIndex, { type = "daily" } = {}) {
  const key = `history_${planetIndex}_${type}`
  const cached = await getCache(key, { storeOnly: true })

  if (cached) return cached

  try {
    const data = await api(`war/history/${planetIndex}?type=${type}`) || {}

    if (!data) return

    addCache(key, data, 20000, { storeOnly: true })

    return data
  } catch (error) {
    console.error(error)
  }
}

export async function saveCampaignStatusHistory(formattedCampaigns) {
  const requests = []

  formattedCampaigns.forEach(({ planetIndex, health, maxHealth, players, }) => {
    requests.push({
      planet_index: planetIndex,
      current_health: health,
      max_health: maxHealth,
      player_count: players
    })
  })

  try {
    const { error } = await supabase.from("history").insert(requests).select()

    if (error) throw new Error(error.message)
  } catch (error) {
    // @ts-ignore
    throw new Error(error.message)
  }
}
