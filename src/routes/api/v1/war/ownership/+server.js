import { fetchOwnership } from "$lib/api/ownership"

export async function GET() {
  const headers = { "Content-Type": "application/json" }

  try {
    const data = await fetchOwnership()

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
