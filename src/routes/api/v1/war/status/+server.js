import { fetchStatus } from "$lib/api/helldivers"
import { getApiHeaders } from "$lib/utils/headers"

export async function GET() {
  const headers = getApiHeaders(20)
  const status = await fetchStatus(fetch)

  return new Response(JSON.stringify(status), { headers })
}
