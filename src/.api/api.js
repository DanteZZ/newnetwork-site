import axios from "axios"
import { api } from "./config"
import Cookies from 'js-cookie'

export const ListBook = async () => await axios.get(
    api + "/books/list",
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)