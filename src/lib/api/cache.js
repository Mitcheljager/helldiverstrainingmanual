import { redis } from "$lib/redis"
import { apiCache } from "$lib/stores/cache"

export async function getCache(key, { storeOnly = false } = {}) {
  const cachedInStore = apiCache.check(key)
  if (cachedInStore) return cachedInStore

  if (storeOnly) return

  try {
    const dbCache = redis ? await redis.get(key) : null

    if (!dbCache) return null
    if (Date.now() > dbCache?.expiresAt) return null

    return dbCache?.data
  } catch(e) {
    console.log(e)
    return null
  }
}

export async function addCache(key, data, ttl = 1000, { storeOnly = false } = {}) {
  const expiresAt = Date.now() + ttl

  apiCache.set(key, data, ttl)

  if (storeOnly) return

  try {
    if (redis) redis.set(key, JSON.stringify({ data, expiresAt }))
  } catch {
    // ignore
  }
}
