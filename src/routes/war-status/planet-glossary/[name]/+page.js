import { error } from '@sveltejs/kit'
import { planetData } from '$lib/data/planets'
import { toSlug } from '$lib/utils/route'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  // eslint-disable-next-line no-unused-vars
  const planet = Object.entries(planetData).find(([_, p]) => toSlug(p.name) === params.name)
  if (!planet) error(404, 'Not found')

  return { index: planet[0], planet: planet[1] }
}
