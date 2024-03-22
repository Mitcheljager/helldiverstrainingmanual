import { fetchInfo } from '$lib/api/helldivers'

export async function GET() {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }
  const info = await fetchInfo(fetch)

  return new Response(JSON.stringify(info), { headers })
}
