import { writable } from "svelte/store"

export const apiCache = cacheStore()

function cacheStore() {
  const { subscribe, set, update } = writable({})

  return {
    set: (key, data, ttl = 10000) => {
      const expiresAt = Date.now() + ttl

      update(cache => ({ ...cache, [key]: { data, expiresAt } }))
    },
    check: (key) => {
      let cachedData = {}
      subscribe(cache => cachedData = cache[key])()

      if (cachedData?.expiresAt > Date.now()) return cachedData.data

      return null
    },
    clear: () => set({})
  }
}
