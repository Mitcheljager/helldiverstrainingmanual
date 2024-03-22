export function getApiHeaders(maxAge = 0) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*"
  }

  if (maxAge) headers["cache-control"] = `max-age=${maxAge}`

  return headers
}
