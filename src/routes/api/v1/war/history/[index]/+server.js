import { fetchHistory } from '$lib/api/history.js'

export async function GET({ url, params }) {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }

  try {
    const type = url.searchParams.get("type") || "daily"

    const data = await fetchHistory(params.index, { type })
    if (!data) throw new Error("No data returned from history")

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
