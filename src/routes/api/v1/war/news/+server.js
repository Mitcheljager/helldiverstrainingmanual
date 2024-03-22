import { fetchNews } from "$lib/api/helldivers"
import { getApiHeaders } from "$lib/utils/headers.js"

export async function GET({ url }) {
  const headers = getApiHeaders(120)
  const from = parseInt(url.searchParams.get("from") || "0")
  const data = await fetchNews(fetch, from)

  return new Response(JSON.stringify(data), { headers })
}
