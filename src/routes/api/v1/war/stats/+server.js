import { fetchStats } from "$lib/api/stats"

export async function GET() {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }

  try {
    const result = await fetchStats(fetch)

    if (!result) throw new Error("No result")

    return new Response(JSON.stringify(result.galaxy_stats), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
