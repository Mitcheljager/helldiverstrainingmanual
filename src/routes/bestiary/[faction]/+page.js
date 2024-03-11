import { error } from "@sveltejs/kit"
import { toSlug } from "$lib/utils/route"
import { bestiary } from "$lib/data/bestiary"

/** @type {import("./$types").PageLoad} */
export function load({ params }) {
  const faction = bestiary.find(s => toSlug(s.faction) === params.faction)
  if (!faction) error(404, "Not found")

  return { faction }
}
