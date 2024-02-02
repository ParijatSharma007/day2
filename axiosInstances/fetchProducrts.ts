import { baseUrl } from "@/APIURLS/urls";
import axios from "axios";

export const axiosProductInstance = axios.create({
    baseURL : baseUrl
})

