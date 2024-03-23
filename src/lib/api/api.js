export async function api(path, serverFetch = null) {
  try {
    const response = await (serverFetch || fetch)(`/api/v1/${path}`)
    const parsed = await response.json()

    return parsed
  } catch (error) {
    console.error(error)
    return null
  }
}
