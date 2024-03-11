import { planetData } from '$lib/data/planets'

export async function GET() {
  const headers = { 'Content-Type': 'application/json' }

  return new Response(JSON.stringify(planetData), { headers })
}
