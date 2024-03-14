import { fetchInfo, fetchStatus } from "$lib/api/helldivers"
import { saveCampaignStatusHistory } from "$lib/api/history"
import { formatCampaigns } from "$lib/utils/campaign"

export async function GET({ url }) {
  const headers = { "Content-Type": "application/json" }

  try {
    const token = url.searchParams.get("token")

    if (token !== import.meta.env.VITE_HISTORY_API_TOKEN) throw new Error("Incorrect token")

    const [status, info] = (
      await Promise.allSettled([
        fetchStatus(fetch).then(r => r || {}),
        fetchInfo(fetch).then(r => r || {})
      ])
    // @ts-ignore
    ).map(promise => promise.value)

    const formattedCampaigns = formatCampaigns(status, info)

    await saveCampaignStatusHistory(formattedCampaigns)

    return new Response(JSON.stringify({ status: "Done" }), { headers, status: 200 })
  } catch(error) {
    console.error(error)
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }

}
