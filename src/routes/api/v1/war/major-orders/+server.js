import { fetchMajorOrders } from '$lib/api/helldivers'

export async function GET() {
  const headers = { 'Content-Type': 'application/json' }
  const data = await fetchMajorOrders(fetch)

  return new Response(JSON.stringify(data), { headers })
}
