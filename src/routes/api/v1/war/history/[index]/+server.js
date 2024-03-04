import { campaignStatusHistory } from '$lib/stores/data'
import { get } from 'svelte/store'

export async function GET({ params }) {
  const headers = { 'Content-Type': 'application/json' }

  const data = get(campaignStatusHistory)[params.index]

  return new Response(JSON.stringify(data), { headers })
}
