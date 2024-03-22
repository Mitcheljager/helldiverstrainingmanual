import { fetchMajorOrders } from '$lib/api/helldivers'

export async function GET() {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }
  const data = await fetchMajorOrders(fetch)

  return new Response(JSON.stringify(data), { headers })
}
