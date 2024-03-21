import { api } from "$lib/api/api"

export async function fetchStatsForPlanet(index) {
  try {
    return await api(`war/stats/${index}`)
  } catch (error) {
    console.error(error)
  }
}
