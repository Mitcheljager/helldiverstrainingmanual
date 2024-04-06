import { supabase } from "$lib/db"
import { addCache, getCache } from "$lib/api/cache"
import { Timeframe } from "$lib/data/timeframe"
import { hoursDifference } from "$lib/utils/datetime"

export async function fetchHistory(planetIndex, { timeframe = Timeframe.Day } = {}) {
  const key = `history_${planetIndex}_${timeframe}`
  const cached = await getCache(key, { storeOnly: true })

  if (cached) return cached

  try {
    const limits = {
      [Timeframe.Short]: 2,
      [Timeframe.Day]: 288,
      [Timeframe.Week]: 168
    }

    const fetchTimeframe = {
      [Timeframe.Short]: Timeframe.Short,
      [Timeframe.Day]: Timeframe.Short,
      [Timeframe.Week]: Timeframe.Hour
    }

    const dayInMilliseconds = 86400000

    const fromTimeframes = {
      [Timeframe.Short]: dayInMilliseconds,
      [Timeframe.Day]: dayInMilliseconds,
      [Timeframe.Week]: dayInMilliseconds * 7
    }

    const limit = limits[timeframe]
    if (!limit) throw new Error("Incorrect timeframe given")

    const from = new Date(new Date().getTime() - fromTimeframes[timeframe]).toISOString()

    let { data, error } = await supabase
      .from("history")
      .select("created_at, planet_index, current_health, max_health, player_count")
      .gte("created_at", from)
      .eq("planet_index", planetIndex)
      .eq("timeframe", fetchTimeframe[timeframe])
      .order("created_at", { ascending: false })
      .range(0, limit - 1)

    if (fetchTimeframe[timeframe] === Timeframe.Hour) data = fillMissingData(data)

    if (error) throw new Error(error.message)

    addCache(key, data, 300000, { storeOnly: true })

    return data
  } catch (error) {
    console.error(error)
  }
}

export async function saveCampaignStatusHistory(formattedCampaigns, { timeframe = Timeframe.Short } = {}) {
  const requests = []

  formattedCampaigns.forEach(({ planetIndex, health, maxHealth, players, }) => {
    requests.push({
      planet_index: planetIndex,
      current_health: health,
      max_health: maxHealth,
      player_count: players,
      timeframe
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

function fillMissingData(data) {
  data = data.reverse()

  const filledData = []

  data.forEach((entry, index) => {
    const startTimestamp = new Date(data[index].created_at)
    const endTimestamp = new Date(data[Math.min(index + 1, data.length - 1)].created_at)
    const difference = hoursDifference(startTimestamp, endTimestamp)

    if (difference <= 1) {
      filledData.push(entry)
      return
    }

    for (let index = 1; index < difference; index++) {
      const entryCreatedAt = new Date(entry.created_at)
      const newCreatedAt = new Date(entryCreatedAt.setHours(entryCreatedAt.getHours() + index)).toISOString()

      filledData.push({ ...entry, created_at: newCreatedAt, player_count: 0 })
    }
  })

  return filledData.reverse()
}
