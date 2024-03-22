import { fetchInfo, fetchStatus } from "$lib/api/helldivers"
import { formatCampaigns } from "$lib/utils/campaign"

export async function GET() {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }

  const [status, info] = (
    await Promise.allSettled([
      fetchStatus(fetch).then(r => r || {}),
      fetchInfo(fetch).then(r => r || {})
    ])
  // @ts-ignore
  ).map(promise => promise.value)

  const formatted = formatCampaigns(status, info)

  return new Response(JSON.stringify(formatted), { headers })
}
