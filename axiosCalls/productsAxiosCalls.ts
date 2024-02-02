import { axiosProductInstance } from "@/axiosInstances/fetchProducrts"
import { HttpStatusCode } from "axios"

interface BaseApiResponse {
    status:HttpStatusCode
    data:any
}

export const fetchProducts = async() => {
    const res = await axiosProductInstance.get("/products")
    return res.data
}

export const fetchSingleProduct = async(id : number|string|string[]|undefined) =>{
    const res = await axiosProductInstance.get(`/products/${id}`)
    return res.data
}