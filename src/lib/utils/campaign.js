import { factions } from "$lib/data/factions"
import { planetNames } from "$lib/data/planets"

export function formatCampaigns(campaigns, planetStatus, planetInfos, planetEvents) {
  if (!campaigns || !planetStatus || !planetInfos) return []

  const zeroUnix = 1707313895 // Helldivers 2 server start time? No idea

  const mapped = (campaigns || []).map(campaign => {
    const { planetIndex } = campaign
    const event = planetEvents?.find(e => e.planetIndex === planetIndex)

    const name = planetNames[planetIndex]
    const currentStatus = planetStatus[planetIndex]
    const planetInfo = planetInfos[planetIndex]
    const faction = factions[event?.race || currentStatus.owner]

    const health = event?.health || currentStatus.health
    const maxHealth = event?.maxHealth || planetInfo.maxHealth
    const { players } = currentStatus

    const percentage = 100 - (100 / maxHealth * health)
    const defense = event?.eventType === 1

    const expireDateTime = event?.expireTime ? zeroUnix + event?.expireTime : 0

    return {
      planetIndex,
      name,
      faction,
      players,
      health,
      maxHealth,
      percentage,
      defense,
      expireDateTime
    }
  })

  return mapped.sort((a, b) => {
    if (a.defense !== b.defense) return a.defense ? -1 : 1
    if (a.percentage !== b.percentage) return b.percentage - a.percentage
    return a.name.localeCompare(b.name)
  })
}
