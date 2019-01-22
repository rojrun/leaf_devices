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

export function addContactMessage( your_fname, your_lname, your_email, your_phone_number, your_message ) {
    const resp = axios.post('/api/contact-message', {
        first_name: your_fname,
        last_name: your_lname,
        email: your_email,
        phone_number: your_phone_number,
        message: your_message
    });
    return {
        type: types.ADDCONTACTUS,
        payload: resp
    }
}