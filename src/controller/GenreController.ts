import axios from 'axios';
import { PlainUser } from '../interfaces/PlainUser';
import { json } from 'react-router-dom';
import { Books } from '../interfaces/Books';
const headers = {
    'Content-Type': 'application/json',
};

const apiBaseUrl = 'http://localhost:8080/api';
export async function getGenres() {
    try {
        const response = await axios.get(`${apiBaseUrl}/genre/all`, { headers:headers, withCredentials:false });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function getGenreByName(name:string) {
    try {
        const response = await axios.get(`${apiBaseUrl}/genre/get`, { headers:headers, withCredentials:false,params: {genre_name:name} });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}



