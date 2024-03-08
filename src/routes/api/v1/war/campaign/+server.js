import { fetchInfo, fetchStatus } from '$lib/api/helldivers'
import { formatCampaigns } from '$lib/utils/campaign'

export async function GET() {
  const headers = { 'Content-Type': 'application/json' }

  const [status, info] = (
    await Promise.allSettled([
      fetchStatus(fetch).then(r => r || {}),
      fetchInfo(fetch).then(r => r || {})
    ])
  // @ts-ignore
  ).map(promise => promise.value)

  const { campaigns, planetStatus, planetEvents } = status
  const { planetInfos } = info

  const formatted = formatCampaigns(campaigns, planetStatus, planetInfos, planetEvents)

  return new Response(JSON.stringify(formatted), { headers })
}
