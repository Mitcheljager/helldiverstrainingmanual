import { supabase } from "$lib/db"
import { addCache, getCache } from "$lib/api/cache"

export async function fetchOwnership() {
  const key = "ownership"
  const cached = await getCache(key, { storeOnly: true })

  if (cached) return cached

  const { data, error } = await supabase
    .from("ownership")
    .select("created_at, planet_index, current_owner, previous_owner")
    .order("created_at", { ascending: false })
    .range(0, 1000)

  addCache(key, data, 21600000, { storeOnly: true }) // 6 Hours

  if (error) throw new Error(error.message)

  return data
}

export async function fetchOwnershipForPlanet(index) {
  const key = `ownership_${index}`
  const cached = await getCache(key, { storeOnly: true })

  if (cached) return cached

  const { data, error } = await supabase
    .from("ownership")
    .select("created_at, planet_index, current_owner, previous_owner")
    .order("created_at", { ascending: false })
    .eq("planet_index", index)
    .range(0, 1000)

  addCache(key, data, 600000, { storeOnly: true }) // 10 Minutes

  if (error) throw new Error(error.message)

  return data
}
