import axios from 'axios';
import types from './types';

export function getProducts() {
    const resp = axios.get('/api/products');
    return {
        type: types.PRODUCTS,
        payload: resp
    }
}

export function addToCart(id, productQuantity) {
    const resp = axios.post('/api/cart', {
        product_id: id,
        quantity: productQuantity
    });
    return {
        type: types.ADDCART,
        payload: resp
    }
}

export function getCart() {
    const resp = axios.get('/api/cart');
    return {
        type: types.GETCART,
        payload: resp
    }
}