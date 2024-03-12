import { sequence } from "@sveltejs/kit/hooks"

/** @type {import('@sveltejs/kit').Handle} */
export async function redirects({ event, resolve }) {
  const { pathname, origin } = event.url

  let url
  if (pathname.startsWith('/war-status/planet-glossary')) url = origin + '/planet-glossary'
  if (pathname.startsWith('/war-status/planetary-records')) url = origin + '/planet-glossary'

  if (url) return Response.redirect(url, 301)

  return await resolve(event)
}

export const handle = sequence(redirects)
