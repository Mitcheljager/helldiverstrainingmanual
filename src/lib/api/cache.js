import { apiCache } from "$lib/stores/cache"

export function getCache(key) {
  const cachedInStore = apiCache.check(key)
  if (cachedInStore) return cachedInStore
}

export function addCache(key, data, ttl = 1000) {
  apiCache.set(key, data, ttl)
}
