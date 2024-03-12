import { fetchInfo, fetchStatus } from "$lib/api/helldivers"
import { fetchOwnership } from "$lib/api/ownership"

// @ts-ignore
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const [status, info, ownership] = (
    await Promise.allSettled([
      fetchStatus(fetch).then(r => r || {}),
      fetchInfo(fetch).then(r => r || {}),
      fetchOwnership().then(r => r || [])
    ])
  // @ts-ignore
  ).map(promise => promise.value)

  const records = ownership.filter(i => i.current_owner !== i.previous_owner)

  return {
    records,
    status,
    info
  }
}
