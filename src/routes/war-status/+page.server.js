import { fetchInfo, fetchStatus } from "$lib/api/helldivers"
import { fetchStats } from "$lib/api/stats"

// @ts-ignore
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const [status, info, stats] = (
    await Promise.allSettled([
      fetchStatus(fetch).then(r => r || {}),
      fetchInfo(fetch).then(r => r || {}),
      fetchStats(fetch).then(r => r || {})
    ])
  // @ts-ignore
  ).map(promise => promise.value)

  return {
    status,
    info,
    stats
  }
}
