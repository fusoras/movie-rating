const PLACEHOLDER_IMAGE = "https://placehold.co/210x295"

export const getShowData = async (id) => {
    const URL = `https://api.tvmaze.com/shows/${id}`
    const data = await fetch(URL).then(res => res.json())

    return {
        name: data.name,
        rating: data.rating,
        image: data.image?.medium ?? PLACEHOLDER_IMAGE
    }
}

