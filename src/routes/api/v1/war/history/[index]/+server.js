import { fetchHistory } from "$lib/api/history.js"
import { getApiHeaders } from "$lib/utils/headers.js"

export async function GET({ url, params }) {
  const headers = getApiHeaders(180)

  try {
    const timeframe = url.searchParams.get("timeframe") || "day"

    const data = await fetchHistory(params.index, { timeframe })
    if (!data) throw new Error("No data returned from history")

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
