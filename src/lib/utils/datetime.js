export function timeFromNow(unixTimestamp) {
  const currentTime = Math.floor(Date.now() / 1000)
  const totalSeconds =  unixTimestamp - currentTime

  const hours = Math.max(Math.floor(totalSeconds / 3600), 0)
  const minutes = Math.max(Math.floor(totalSeconds / 60) % 60, 0)
  const seconds = Math.max(Math.floor(totalSeconds % 60), 0)

  return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
}
