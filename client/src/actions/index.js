import axios from 'axios';
import types from './types';

export function getProducts() {
    const resp = axios.get('/api/products');
    return {
        type: types.PRODUCTS,
        payload: resp
    }
}

export function addToCart() {
    const resp = axios.post('/api/cart');
    return {
        type: types.CART,
        payload: resp
    }
}