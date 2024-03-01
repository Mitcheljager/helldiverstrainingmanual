import { fetchInfo, fetchStatus } from '$lib/api/helldivers'
import { formatCampaigns } from '$lib/utils/campaign'

export async function GET() {
  const headers = { 'Content-Type': 'application/json' }
  const status = await fetchStatus(fetch)
  const info = await fetchInfo(fetch)
  const { campaigns, planetStatus } = status
  const { planetInfos } = info

  const formatted = formatCampaigns(campaigns, planetStatus, planetInfos)

  return new Response(JSON.stringify(formatted), { headers })
}
