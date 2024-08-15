import axios from 'axios';
import {Genre} from '../interfaces/Genre'
import {Books} from '../interfaces/Books'

const headers = {
    'Content-Type': 'application/json',
};

const apiBaseUrl = 'http://localhost:8080/api/admin';

export async function addGenreFn(genre: string) {
  try {
    const response = await axios.post(`${apiBaseUrl}/add/genre`, {name:genre},{ headers:headers, withCredentials:false});
    return response.data;
  } catch (error) {
    console.error('Error adding genre:', error);
    throw error;
  }
}

export async function deleteGenre(genreName: string) {
  try {
    const response = await axios.delete(`${apiBaseUrl}/delete/genre`, { headers:headers, withCredentials:false,params: { genre_name: genreName } });
    return response.data;
  } catch (error) {
    console.error('Error deleting genre:', error);
    throw error;
  }
}

export async function addBook(books: Books, authorId: number = 1, genreId: number = 1) {
  try {
    const response = await axios.post(`${apiBaseUrl}/add/book`, books, {headers:headers, withCredentials:false, params: { author_id: authorId, genre_id: genreId } });
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
}

export async function addStock(bookId: number, quantity: number) {
  try {
    const response = await axios.post(`${apiBaseUrl}/add/stock`, null, {headers:headers, withCredentials:false, params: { book_id: bookId, quantity: quantity } });
    return response.data;
  } catch (error) {
    console.error('Error adding stock:', error);
    throw error;
  }
}

export async function delBook(bookId: number) {
  try {
    const response = await axios.delete(`${apiBaseUrl}/delete/books`, {headers:headers, withCredentials:false, params: { book_id: bookId } });
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
}