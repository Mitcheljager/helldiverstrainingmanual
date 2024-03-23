import { api } from "$lib/api/api"

// @ts-ignore
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const [status, info, ownership] = (
    await Promise.allSettled([
      api('war/status', fetch).then(r => r || {}),
      api('war/info', fetch).then(r => r || {}),
      api('war/ownership', fetch).then(r => r || [])
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
