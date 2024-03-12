import { sequence } from "@sveltejs/kit/hooks"

/** @type {import('@sveltejs/kit').Handle} */
export async function redirects({ event, resolve }) {
  const { pathname, origin } = event.url

  let url

  if (pathname.startsWith("/war-status/planet-glossary/")) url = pathname.replace("/war-status", "")
  else if (pathname.startsWith("/war-status/planet-glossary")) url = "/planet-glossary"
  else if (pathname.startsWith("/war-status/planetary-records")) url = "/planetary-records"

  if (url) return Response.redirect(origin + url, 301)

  return await resolve(event)
}

export const handle = sequence(redirects)
