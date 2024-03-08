import { supabase } from "$lib/db"

export async function fetchOwnership() {
  const { data, error } = await supabase
    .from("ownership")
    .select("created_at, planet_index, current_owner, previous_owner")
    .order("created_at", { ascending: false })
    .range(0, 1000)

  if (error) throw new Error(error.message)

  return data
}
