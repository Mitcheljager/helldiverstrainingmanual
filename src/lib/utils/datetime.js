export function timeFromNow(unixTimestamp) {
  const currentTime = Math.floor(Date.now() / 1000)
  const totalSeconds =  unixTimestamp - currentTime

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds % 60)

  return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
}
