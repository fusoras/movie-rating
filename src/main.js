import { getShowData } from "./modules/getShowdata.js"
const ID = "2993"

const datafi = await getShowData(ID)
console.log(datafi.name)