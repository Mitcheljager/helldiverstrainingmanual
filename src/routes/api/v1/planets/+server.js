import { planetData } from "$lib/data/planets"
import { getApiHeaders } from "$lib/utils/headers"

export async function GET() {
  const headers = getApiHeaders(3600)

  const data = {}
  Object.entries(planetData).forEach(([key, { name, sector, biome, environmentals }]) => {
    data[key] = {
      name, sector, biome, environmentals
    }
  })

  return new Response(JSON.stringify(data), { headers })
}
