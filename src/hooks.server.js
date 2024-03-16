import * as Sentry from "@sentry/sveltekit";
import { sequence } from "@sveltejs/kit/hooks"

Sentry.init({
    dsn: "https://833fd7ffbb41787467e62104ae116bbf@o4506918033293312.ingest.us.sentry.io/4506918036963328",
    tracesSampleRate: 1
})

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

export const handle = sequence(Sentry.sentryHandle(), sequence(redirects))
export const handleError = Sentry.handleErrorWithSentry();