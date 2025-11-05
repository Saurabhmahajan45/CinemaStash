import axios from "axios";
import { USER_REGISTER_API_URL } from "../constants/APIConstants.js";

export function RegisterService(formData){
    return axios.post(`${USER_REGISTER_API_URL}`, formData)
}