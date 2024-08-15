import axios from 'axios';
import { PlainUser } from '../interfaces/PlainUser';
import { json } from 'react-router-dom';
import { Review } from '../interfaces/Review';
const headers = {
    'Content-Type': 'application/json',
};
const apiBaseUrl = 'http://localhost:8080/api';

export async function getReviews(bookid:number) {
    try {
        const response = await axios.get(`${apiBaseUrl}/review/all/book`, { headers:headers, withCredentials:false, params: {book_id:bookid}  });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function addReview(review: Review, bookid:number, userid:number) {
    try {
      const response = await axios.post(`${apiBaseUrl}/review/add`, review, { headers, withCredentials: false, params: { user_id: userid, book_id: bookid } });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
