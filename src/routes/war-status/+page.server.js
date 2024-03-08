import { fetchInfo, fetchStatus } from "$lib/api/helldivers"

// @ts-ignore
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const [status, info] = (
    await Promise.allSettled([
      fetchStatus(fetch).then(r => r || {}),
      fetchInfo(fetch).then(r => r || {})
    ])
  // @ts-ignore
  ).map(promise => promise.value)

  return {
    status,
    info
  }
}
