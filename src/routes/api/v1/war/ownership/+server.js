import { fetchOwnership } from "$lib/api/ownership"
import { getApiHeaders } from "$lib/utils/headers"

export async function GET() {
  const headers = getApiHeaders(21600)

  try {
    const data = await fetchOwnership()

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
