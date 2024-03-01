import { factions } from "$lib/data/factions"
import { planetNames } from "$lib/data/planets"

export function formatCampaigns(campaigns, planetStatus, planetInfos) {
  if (!campaigns || !planetStatus || !planetInfos) return []

  const mapped = (campaigns || []).map(campaign => {
    const { planetIndex } = campaign
    const name = planetNames[planetIndex]
    const currentStatus = planetStatus[planetIndex]
    const planetInfo = planetInfos[planetIndex]
    const faction = factions[currentStatus.owner]
    const { health, players } = currentStatus
    const maxHealth = planetInfo.maxHealth
    const percentage = 100 - (100 / maxHealth * health)

    return {
      index: planetIndex,
      name,
      faction,
      players,
      percentage
    }
  })

  return mapped.sort((a, b) => a > b ? -1 : 1).sort((a, b) => a.percentage > b.percentage ? -1 : 1)
}
