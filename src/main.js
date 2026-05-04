import { getShowData } from "./modules/getShowdata.js"
const ID = "2993"

const show = await getShowData(ID)
console.log(show.name)

const header = document.querySelector("header")

header.setHTMLUnsafe(/* html */ `
    <img src=${show.image} alt=${show.name}>
    <h1>${show.name}</h1>`
)