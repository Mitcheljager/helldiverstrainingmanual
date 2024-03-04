import { fetchInfo, fetchStatus } from "$lib/api/helldivers"
import { saveCampaignStatusHistory } from "$lib/api/history"

export async function GET({ url }) {
  const headers = { "Content-Type": "application/json" }

  try {
    const token = url.searchParams.get("token")

    if (token !== import.meta.env.VITE_HISTORY_API_TOKEN) throw new Error("Incorrect token")

    const status = await fetchStatus(fetch)
    const info = await fetchInfo(fetch)

    await saveCampaignStatusHistory(status, info)

    return new Response(JSON.stringify({ status: "Done" }), { headers, status: 200 })
  } catch(error) {
    console.error(error)
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }

}
