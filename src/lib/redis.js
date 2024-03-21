import { Redis } from "@upstash/redis/cloudflare"

export const redis = import.meta.env.VITE_REDIS_UPSTASH_TOKEN ? new Redis({
  url: import.meta.env.VITE_REDIS_HOSTNAME,
  token: import.meta.env.VITE_REDIS_UPSTASH_TOKEN,
}) : null
