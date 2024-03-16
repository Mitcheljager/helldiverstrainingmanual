import { supabase } from "$lib/db"

export async function logInSupabase(data) {
  const { error } = await supabase.from("logs").insert([{ data }]).select()

  if (error) console.error(error)
}
