import { supabase } from "$lib/db"
import { addCache, getCache } from "$lib/api/cache"
import { Timeframe } from "$lib/data/timeframe"

export async function fetchHistory(planetIndex, { timeframe = Timeframe.Day } = {}) {
  const key = `history_${planetIndex}_${timeframe}`
  const cached = await getCache(key, { storeOnly: true })

  if (cached) return cached

  try {
    const limits = {
      [Timeframe.Short]: 2,
      [Timeframe.Day]: 288
    }

    const limit = limits[timeframe]
    if (!limit) throw new Error("Incorrect timeframe given")

    const from = new Date(new Date().getTime() - 86400000).toISOString()

    const { data, error } = await supabase
      .from("history")
      .select("created_at, planet_index, current_health, max_health, player_count")
      .gte("created_at", from)
      .eq("planet_index", planetIndex)
      .order("created_at", { ascending: false })
      .range(0, limit - 1)

    if (error) throw new Error(error.message)

    addCache(key, data, 300000, { storeOnly: true })

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
