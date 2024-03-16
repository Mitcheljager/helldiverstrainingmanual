import { supabase } from "$lib/db"
import { apiCache } from "$lib/stores/cache"

export async function getCache(key, ttl) {
  const cachedInStore = apiCache.check(key)
  if (cachedInStore) return cachedInStore

  const expiresAt = new Date(Date.now() - ttl).toISOString()

  const dbCache = await supabase.from("cache").select("created_at, data").gte("created_at", expiresAt).eq("key", key)
  const data = dbCache?.data?.[0]?.data

  if (data) apiCache.set(key, data, ttl)

  return data
}

export async function addCache(key, data, ttl = 1000) {
  const now = new Date().toISOString()

  apiCache.set(key, data, ttl)

  const { error } = await supabase.from("cache").insert([{ key, data, created_at: now }]).select()
  if (error) console.error(error)
}
