import { fetchNews } from '$lib/api/helldivers'

export async function GET({ url }) {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }
  const from = parseInt(url.searchParams.get("from") || "0")
  const data = await fetchNews(fetch, from)

  return new Response(JSON.stringify(data), { headers })
}
