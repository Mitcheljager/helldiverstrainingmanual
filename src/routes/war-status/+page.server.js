import { api } from "$lib/api/api"

// @ts-ignore
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const [status, info, stats] = (
    await Promise.allSettled([
      api('war/status', fetch).then(r => r || {}),
      api('war/info', fetch).then(r => r || {}),
      api('war/stats', fetch).then(r => r || {})
    ])
  // @ts-ignore
  ).map(promise => promise.value)

  return {
    status,
    info,
    stats
  }
}
