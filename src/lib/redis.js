import { createClient } from "redis"

export const redis = createClient({
	url: import.meta.env.REDIS_CONNECTION_STRING,
})

redis.connect()
