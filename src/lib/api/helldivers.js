const WarId = 801

export async function fetchStatus(fetch) {
  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/Status`)

    if (!response.ok) throw new Error("Network response was not ok")

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function fetchInfo(fetch) {
  try {
    const response = await fetch(`https://api.live.prod.thehelldiversgame.com/api/WarSeason/${WarId}/WarInfo`)

    if (!response.ok) throw new Error("Network response was not ok")

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
