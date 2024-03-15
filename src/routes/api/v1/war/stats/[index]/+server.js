import { error } from "@sveltejs/kit"
import { planetData } from "$lib/data/planets"
import { fetchStats } from "$lib/api/stats"

export async function GET({ params }) {
  const index = parseInt(params.index)

  const planet = planetData[params.index]
  if (!planet) error(404, "Not found")

  const headers = { "Content-Type": "application/json" }

  try {
    const result = await fetchStats(fetch)
    const data = result?.planets_stats?.find(p => p.planetIndex === index)

    if (!data) throw new Error("No result")

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
