import { supabase } from "$lib/db"

let lastCampaignEntry = 0

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

export async function saveCampaignStatusHistory(status, info) {
  if (!status?.planetStatus?.length) return
  if (!status?.campaigns?.length) return


  const { planetStatus, campaigns } = status
  const now = Date.now()

  if ((now - lastCampaignEntry) / 1000 < 300) return // Only add a new entry every 5 minutes

  const requests = []

  campaigns.forEach(campaign => {
    const planet = planetStatus.find(p => p.index === campaign.planetIndex)

    const { health, players, index } = planet
    const { maxHealth } = info.planetInfos.find(p => p.index === index)

    requests.push({
      planet_index: index,
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

  lastCampaignEntry = now
}
