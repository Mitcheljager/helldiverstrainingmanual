import { fetchOwnershipForPlanet } from "$lib/api/ownership"
import { getApiHeaders } from "$lib/utils/headers"

export async function GET({ params }) {
  const headers = getApiHeaders(600)

  try {
    const data = await fetchOwnershipForPlanet(params.index)

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
