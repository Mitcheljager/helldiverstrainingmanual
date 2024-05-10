import { factions } from "$lib/data/factions"
import { planetData } from "$lib/data/planets"

export function formatCampaigns(status, info) {
  if (!status || !info) return []

  const { planetInfos } = info
  const { planetStatus, campaigns, planetEvents } = status

  const mapped = (campaigns || []).map(campaign => {
    const { planetIndex, type } = campaign
    const event = planetEvents?.find(e => e.planetIndex === planetIndex)

    const { name, biome } = planetData[planetIndex]

    const currentStatus = planetStatus[planetIndex]
    const planetInfo = planetInfos[planetIndex]
    const faction = factions[event?.race || currentStatus.owner]

    const health = event?.health || currentStatus.health
    const maxHealth = event?.maxHealth || planetInfo.maxHealth
    const { players } = currentStatus

    const percentage = 100 - (100 / maxHealth * health)

    const defense = event?.eventType === 1

    const expireDateTime = event?.expireTime ? new Date().getTime() / 1000 + event.expireTime - status.time : null

    return {
      planetIndex,
      name,
      faction,
      players,
      health,
      maxHealth,
      percentage,
      defense,
      biome,
      expireDateTime
    }
  })

  return mapped.sort((a, b) => {
    if (a.defense !== b.defense) return a.defense ? -1 : 1
    if (a.percentage !== b.percentage) return b.percentage - a.percentage
    return a.name.localeCompare(b.name)
  })
}
