import { error } from '@sveltejs/kit'
import { stratagems } from '$lib/data/stratagems'
import { toSlug } from '$lib/utils/route'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const category = stratagems.find(s => toSlug(s.category) === params.category)
  if (!category) error(404, 'Not found')

  const stratagem = category.items.find(s => toSlug(s.name) === params.name)
  if (!stratagem) error(404, 'Not found')

  return { category, stratagem }
}
