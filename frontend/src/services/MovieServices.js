import axios from 'axios';
import { MOVIES_API_URL } from '../constants/APIConstants';
import { getToken } from './TokenService';

export function getAuthHeader(){
    const token = getToken();
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export async function saveMovies(formData) {
    return axios.post(MOVIES_API_URL, formData, getAuthHeader());
}

export function getAllMovies() {
    return axios.get(MOVIES_API_URL, getAuthHeader());
}

export function deleteMovies(id) {
    return axios.delete(`${MOVIES_API_URL}/${id}`, getAuthHeader());
}

export function getMovieById(id) {
    return axios.get(`${MOVIES_API_URL}/${id}`, getAuthHeader());
}

export function updateMovie(id, formData) {
    return axios.put(`${MOVIES_API_URL}/${id}`, formData, getAuthHeader());
}
