import { fetchInfo, fetchStatus } from "$lib/api/helldivers"

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const status = await fetchStatus(fetch)
  const info = await fetchInfo(fetch)

  return {
    status,
    info
  }
}
