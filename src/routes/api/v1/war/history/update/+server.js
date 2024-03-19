import { fetchInfo, fetchStatus } from "$lib/api/helldivers"
import { saveCampaignStatusHistory } from "$lib/api/history"
import { formatCampaigns } from "$lib/utils/campaign"

export async function GET({ url }) {
  const headers = { "Content-Type": "application/json" }

  try {
    const token = url.searchParams.get("token")

    if (token !== import.meta.env.VITE_HISTORY_API_TOKEN) throw new Error("Incorrect token")

    let [status, info] = (
      await Promise.allSettled([
        fetchStatus(fetch, { bypassCache: true }).then(r => r || {}),
        fetchInfo(fetch, { bypassCache: true }).then(r => r || {})
      ])
    // @ts-ignore
    ).map(promise => promise.value)

    // Retry fetch if either of the endpoints came back with unexpected results
    let safety = 0
    while((!status?.campaigns?.length || !info?.planetInfos?.length) && safety < 10) {
      await new Promise(res => setTimeout(res, 1000))

      if (!status?.campaigns?.length) status = await fetchStatus(fetch, { bypassCache: true }) || {}
      if (!info?.planetInfos?.length) info = await fetchInfo(fetch, { bypassCache: true }) || {}

      safety++
    }

    const formattedCampaigns = formatCampaigns(status, info)

    await saveCampaignStatusHistory(formattedCampaigns)

    return new Response(JSON.stringify({ status: "Done" }), { headers, status: 200 })
  } catch(error) {
    console.error(error)
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
