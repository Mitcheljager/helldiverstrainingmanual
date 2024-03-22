import { fetchInfo } from '$lib/api/helldivers'
import { getApiHeaders } from '$lib/utils/headers'

export async function GET() {
  const headers = getApiHeaders(300)
  const info = await fetchInfo(fetch)

  return new Response(JSON.stringify(info), { headers })
}
