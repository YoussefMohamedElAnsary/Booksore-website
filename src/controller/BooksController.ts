import axios from 'axios';
import { PlainUser } from '../interfaces/PlainUser';
import { json } from 'react-router-dom';
import { Books } from '../interfaces/Books';
const headers = {
    'Content-Type': 'application/json',
};

const apiBaseUrl = 'http://localhost:8080/api';
export async function getBooks() {
    try {
        const response = await axios.get(`${apiBaseUrl}/books/all/books`, { headers:headers, withCredentials:false });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


export async function editBooks(books: Books) {
    try {
        
        const response = await axios.put(`${apiBaseUrl}/books/edit/books`, books, { headers, withCredentials: false });
        return response.data;
    } catch (error) {
        console.error('Error editing book:', error);
        throw error;
    }
}

export async function deleteBooks(bookid:number) {
    try {
        const response = await axios.delete(`${apiBaseUrl}/admin/delete/books`, { headers:headers, withCredentials:false,params: {book_id:bookid} });
        return response.data;
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
}

export async function getBook(bookid:number) {
    try {
        const response = await axios.get(`${apiBaseUrl}/books/books`, { headers:headers, withCredentials:false,params: {book_id:bookid} });
        return response.data;
    } catch (error) {
        console.error('Error fetching book:', error);
        throw error;
    }
}

export async function getBookByGenre(genreName:string) {
    try {
        const response = await axios.get(`${apiBaseUrl}/books/all`, { headers:headers, withCredentials:false,params: {genre_name:genreName} });
        return response.data;
    } catch (error) {
        console.error('Error fetching book:', error);
        throw error;
    }
}