export const getEspisodeList = async (id) => {
    const URL = `https://api.tvmaze.com/shows/${id}/episodes`
    const episodes = await fetch(URL).then(res => res.json())

    const episodeList = episodes.map(episode => ({
        number: episode.number,
        season: episode.season,
        rating: episode.rating.average
    }))

    const episodesBySeason = Object.groupBy(episodeList, (episode) => episode.season)
    return episodesBySeason
}