import { fetchStats } from "$lib/api/stats"

export async function GET() {
  const headers = { "Content-Type": "application/json", "cache-control": "max-age=60" }

  try {
    const result = await fetchStats(fetch)

    if (!result) throw new Error("No result")

    return new Response(JSON.stringify(result.galaxy_stats), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
