import { API_MOVIE, PLACEHOLDER_IMAGE } from "../config";

export const getShowData = async (id) => {
  const URL = `${API_MOVIE}${id}`;
  try {
    const data = await fetch(URL).then((res) => res.json());

    return {
      name: data.name,
      rating: data.rating,
      image: data.image?.medium ?? PLACEHOLDER_IMAGE,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
