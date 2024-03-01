import { fetchStatus } from '$lib/api/helldivers'

export async function GET() {
  const headers = { 'Content-Type': 'application/json' }
  const status = await fetchStatus(fetch)

  return new Response(JSON.stringify(status), { headers })
}
