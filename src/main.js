import { getShowData } from "./services/getShowdata.js";
import { getEspisodeList } from "./services/getEpisodeList.js";

const ID = "2993";
const show = await getShowData(ID);
const header = document.querySelector("header");

if (show == null) {
  header.setHTMLUnsafe(/* html */ `
        <img src="" alt="No se pudo cargar la imagen">
        <h1>No se pudo cargar el contenido</h1>`);
}

header.setHTMLUnsafe(/* html */ `
    <img src=${show.image} alt=${show.name}>
    <h1>${show.name}</h1>`);

const episodes = document.querySelector(".episodes");

// Cada episodio
const createEpisodeHTML = (episode) =>
  episode
    .map(
      (
        data,
      ) => /* html */ `<div class="episode episode-${data.number} rating-${Math.floor(data.rating)}">
        ${data.rating ? data.rating : ""}
    </div>`,
    )
    .join("");
// Cada temporada (data = array de episodios, number = temporada)
const createSeasonHTML = (data, number) => /* html */ `
    <article class="season">
        <header class="season-header">T${number}</header>
        ${createEpisodeHTML(data, number)}
    </article>
`;

const seasons = await getEspisodeList(ID);

// Recorre cada temporada y llama a createSeasonHTML
const list = await Object.values(seasons).map((season, index) =>
  createSeasonHTML(season, index + 1),
);
episodes.setHTMLUnsafe(list.join(""));
