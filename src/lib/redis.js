import { Redis } from "@upstash/redis/cloudflare"

export const redis = new Redis({
  url: import.meta.env.VITE_REDIS_HOSTNAME,
  token: import.meta.env.VITE_REDIS_UPSTASH_TOKEN,
})
