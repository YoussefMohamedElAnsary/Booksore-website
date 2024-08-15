import axios from 'axios';
import { PlainUser } from '../interfaces/PlainUser';
import { UserDTO } from '../interfaces/UserDTO';

import { json } from 'react-router-dom';
import { OrderedBookDTO } from '../interfaces/OrderedBookDTO';
const headers = {
    'Content-Type': 'application/json',
};

const apiBaseUrl = 'http://localhost:8080/api';
export async function getUsers() {
    try {
        const response = await axios.get(`${apiBaseUrl}/user/all/users`, { headers:headers, withCredentials:false });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function login(user: PlainUser, navigate: any) {
    try {
        const response = await axios.post(`${apiBaseUrl}/user/login`, JSON.stringify(user), { headers, withCredentials: false });

        if (response.status === 200) {
            localStorage.setItem("BookStoreUser",JSON.stringify(response.data))
            navigate('/home');
        }
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.log(error.response.data)
        return error.response.data;
    }
}


export async function register(user: UserDTO, navigate: any) {
    try {
        const response = await axios.post(`${apiBaseUrl}/user/register`, JSON.stringify(user), { headers, withCredentials: false });

        if (response.status === 200) {
            localStorage.setItem("BookStoreUser",JSON.stringify(response.data))
            navigate('/home');
        }
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.log(error.response.data)
        return error.response.data;
    }
}



export async function getCart(uid:number) {
    try {
        const response = await axios.get(`${apiBaseUrl}/user/cart`, { headers:headers, withCredentials:false,params:{user_id: uid} });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function addToCart(uid:number,book:OrderedBookDTO) {
    try {
        const response = await axios.post(`${apiBaseUrl}/user/cart/add`,book, { headers:headers, withCredentials:false,params:{user_id: uid} });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function removeFromCart(cid:number,bid:number) {
    try {
        console.log('Removing from cart. Cart ID:', cid, 'Book ID:', bid);
        const response = await axios.delete(`${apiBaseUrl}/user/cart/del`, { headers:headers, withCredentials:false,params:{cart_id: cid, book_id:bid} });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}