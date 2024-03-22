import { supabase } from "$lib/db"
import { addCache, getCache } from "$lib/api/cache"

export async function fetchHistory(planetIndex, { type = "daily" } = {}) {
  const key = `history_${planetIndex}_${type}`
  const cached = await getCache(key, { storeOnly: true })

  if (cached) return cached

  try {
    const limits = {
      short: "2",
      daily: "288"
    }

    const limit = limits[type]
    if (!limit) throw new Error("Incorrect type given")

    const from = new Date(new Date().getTime() - 86400000).toISOString()

    const { data, error } = await supabase
      .from("history")
      .select("created_at, planet_index, current_health, max_health, player_count")
      .gte("created_at", from)
      .eq("planet_index", planetIndex)
      .order("created_at", { ascending: false })
      .range(0, limit)

    if (error) throw new Error(error.message)

    addCache(key, data, 180000, { storeOnly: true })

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
