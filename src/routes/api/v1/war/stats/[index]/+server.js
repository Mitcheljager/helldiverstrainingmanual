import { error } from "@sveltejs/kit"
import { planetData } from "$lib/data/planets"
import { fetchStats } from "$lib/api/stats"
import { getApiHeaders } from "$lib/utils/headers.js"

export async function GET({ params }) {
  const index = parseInt(params.index)

  const planet = planetData[params.index]
  if (!planet) error(404, "Not found")

  const headers = getApiHeaders(300)

  try {
    const result = await fetchStats(fetch)
    const data = result?.planets_stats?.find(p => p.planetIndex === index) || {}

    if (!data) throw new Error("No result")

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
