import { supabase } from '$lib/db'

export async function GET({ params }) {
  const headers = { "Content-Type": "application/json" }

  try {
    const { data, error } = await supabase
      .from("history")
      .select("created_at, planet_index, current_health, max_health, player_count")
      .eq("planet_index", params.index)
      .order("created_at", { ascending: false })
      .range(0, 200)

    if (error) throw new Error(error.message)

    return new Response(JSON.stringify(data), { headers })
  } catch (error) {
    return new Response(JSON.stringify({ status: "Error" }), { headers, status: 500 })
  }
}
