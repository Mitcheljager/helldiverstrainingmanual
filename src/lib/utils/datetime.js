export function timeFromNow(unixTimestamp) {
  const currentTime = Math.floor(Date.now() / 1000)
  const totalSeconds = unixTimestamp - currentTime

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds % 60)

  return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
}

export function hoursFromNow(unixTimestamp) {
  const currentTime = Math.floor(Date.now() / 1000)
  const totalSeconds =  unixTimestamp - currentTime

  return Math.abs(Math.floor(totalSeconds / 3600))
}

export function daysSinceDate(date) {
  const startDate = new Date(date);
  const currentDate = new Date();

  // @ts-ignore
  const differenceInMs = currentDate - startDate;

  const millisecondsInDay = 1000 * 60 * 60 * 24
  return Math.floor(differenceInMs / millisecondsInDay)
}

export function secondsToYears(seconds) {
  const secondsInYear = 31536000; // 365 days * 24 hours * 60 minutes * 60 seconds
  return Math.round(seconds / secondsInYear);
}

export function secondsToHours(seconds) {
  const secondsInDay = 3600; // 60 minutes * 60 seconds
  return Math.round(seconds / secondsInDay);
}

export function secondsToDaysWithHours(seconds) {
  const hours = secondsToHours(seconds)
  const days = Math.floor(hours / 24)
  const leftoverHours = Math.ceil(hours % 24)

  return `${days}D ${leftoverHours}H`
}

export function humanReadableDatetime(datetime) {
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }

  return datetime.toLocaleDateString(undefined, options)
}

export function hoursDifference(start, end) {
  const timeDifference = end.getTime() - start.getTime()
  return Math.round(timeDifference / (1000 * 60 * 60))
}
