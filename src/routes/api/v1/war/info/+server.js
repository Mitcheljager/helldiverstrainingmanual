import { fetchInfo } from '$lib/api/helldivers'

export async function GET() {
  const headers = { 'Content-Type': 'application/json' }
  const info = await fetchInfo(fetch)

  return new Response(JSON.stringify(info), { headers })
}
