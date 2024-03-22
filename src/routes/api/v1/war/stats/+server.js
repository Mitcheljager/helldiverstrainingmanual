import { fetchStats } from "$lib/api/stats"
import { getApiHeaders } from "$lib/utils/headers"

export async function GET() {
  const headers = getApiHeaders(300)

  try {
    const result = await fetchStats(fetch)

    if (!result) throw new Error("No result")

    return new Response(JSON.stringify(result.galaxy_stats), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
