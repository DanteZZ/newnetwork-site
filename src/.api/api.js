import axios from "axios"

export const getPage = async (name) => await axios.get( "/pages/"+name+".html" )
export const pay = async (agrnum,amount) => await axios.get("/api/pay",{params:{agrnum,amount}})
export const order = async (data) => await axios.post("/api/registerOrder",data)