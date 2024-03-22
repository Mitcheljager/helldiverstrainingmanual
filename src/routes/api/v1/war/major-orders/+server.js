import { fetchMajorOrders } from '$lib/api/helldivers'
import { getApiHeaders } from '$lib/utils/headers'

export async function GET() {
  const headers = getApiHeaders(120)
  const data = await fetchMajorOrders(fetch)

  return new Response(JSON.stringify(data), { headers })
}
