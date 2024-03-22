import { planetData } from "$lib/data/planets"

export async function GET() {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }

  return new Response(JSON.stringify(planetData), { headers })
}
