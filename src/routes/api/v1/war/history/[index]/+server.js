import { fetchHistory } from "$lib/api/history.js"
import { Timeframe } from "$lib/data/timeframe.js"
import { getApiHeaders } from "$lib/utils/headers.js"

export async function GET({ url, params }) {
  const headers = getApiHeaders(300)

  try {
    const timeframe = url.searchParams.get("timeframe") || Timeframe.Day

    const data = await fetchHistory(params.index, { timeframe })
    if (!data) throw new Error("No data returned from history")

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
