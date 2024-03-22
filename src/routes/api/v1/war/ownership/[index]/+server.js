import { fetchOwnershipForPlanet } from "$lib/api/ownership"

export async function GET({ params }) {
  const headers = { "cache-control": "max-age=600", "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }

  try {
    const data = await fetchOwnershipForPlanet(params.index)

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
