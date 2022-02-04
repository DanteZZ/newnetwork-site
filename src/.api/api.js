import axios from "axios"

export const getPage = async (name) => await axios.get( "/pages/"+name+".html" )