import { supabase } from "$lib/db"
import { api } from "$lib/api/api"

export async function fetchHistory(planetIndex, { limit = 288 } = {}) {
  try {
    return await api(`war/history/${planetIndex}?limit=${limit}`) || {}
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
