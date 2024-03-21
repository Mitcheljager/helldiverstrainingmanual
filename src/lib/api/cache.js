import { redis } from "$lib/redis"
import { apiCache } from "$lib/stores/cache"

export async function getCache(key) {
  const cachedInStore = apiCache.check(key)
  if (cachedInStore) return cachedInStore

  const dbCache = await redis.get(key)
  const data = dbCache ? JSON.parse(dbCache) : null

  if (!data) return null
  if (Date.now() > data?.expiresAt) return null

  return data?.data
}

export async function addCache(key, data, ttl = 1000) {
  const expiresAt = Date.now() + ttl

  apiCache.set(key, data, ttl)
  redis.set(key, JSON.stringify({ data, expiresAt }))
}
