export async function api(path) {
  try {
    const response = await fetch(`/api/v1/${path}`)
    const parsed = await response.json()

    return parsed
  } catch (error) {
    console.error(error)
    return null
  }
}
