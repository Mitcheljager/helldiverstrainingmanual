import { planetNames } from '$lib/data/planets'

export async function GET() {
  const headers = { 'Content-Type': 'application/json' }

  return new Response(JSON.stringify(planetNames), { headers })
}
