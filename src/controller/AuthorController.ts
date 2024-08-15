import axios from 'axios';
import { PlainUser } from '../interfaces/PlainUser';
import { json } from 'react-router-dom';
import { Books } from '../interfaces/Books';
const headers = {
    'Content-Type': 'application/json',
};

const apiBaseUrl = 'http://localhost:8080/api';
export async function getAuthorByName(name:string) {
    try {
        const response = await axios.get(`${apiBaseUrl}/author/get`, { headers:headers, withCredentials:false,params:{author_name:name} });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}