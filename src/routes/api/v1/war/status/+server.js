import { fetchStatus } from "$lib/api/helldivers"

export async function GET() {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }
  const status = await fetchStatus(fetch)

  return new Response(JSON.stringify(status), { headers })
}
