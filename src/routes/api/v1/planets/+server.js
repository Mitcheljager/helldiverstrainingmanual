import { planetData } from "$lib/data/planets"
import { getApiHeaders } from "$lib/utils/headers"

export async function GET() {
  const headers = getApiHeaders(300)

  return new Response(JSON.stringify(planetData), { headers })
}
