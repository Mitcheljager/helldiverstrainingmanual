import { campaignStatusHistory } from '$lib/stores/data'
import { get } from 'svelte/store'

export async function GET() {
  const headers = { 'Content-Type': 'application/json' }

  return new Response(JSON.stringify(get(campaignStatusHistory)), { headers })
}
