import axios from 'axios';
import types from './types';

export function getProducts() {
    const resp = axios.get('/api/products');
    return {
        type: types.PRODUCTS,
        payload: resp
    }
}

export function getCart() {
    console.log('GetCart Data Called from actions');
    const resp = axios.get('/api/cart');
    return {
        type: types.GETCART,
        payload: resp
    }
}

export function getCartMeta() {
    console.log('Get Cart Meta Data Called');
    const resp = axios.get('/api/cart-meta');
    return {
        type: types.GETCARTMETA,
        payload: resp
    }
}

export function getSummary() {
    console.log('getSummary data called');
    const resp = axios.get('/api/summary');
    return {
        type: types.SUMMARY,
        payload: resp
    }
}

export function makeCart() {
    const resp = axios.post('/api/cart');
    return {
        type: types.MAKECART,
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

export function addToCartMeta(id, productQuantity) {
    const resp = axios.post('/api/cart-meta', {
        product_id: id,
        quantity: productQuantity
    });
    return {
        type: types.ADDTOCARTMETA,
        payload: resp
    }
}

export function addToSummary() {
    console.log('addToSummary axios post');
    const resp = axios.post('/api/summary');
    return {
        type: types.ADDTOSUMMARY,
        payload: resp
    }
}

export function updateCartMetaQuantity(cartMetaId, productQuantity) {
    const resp = axios.put('/api/cart-meta/product/' + {cartMetaId}, {
        id: cartMetaId,
        quantity: productQuantity
    });
    return {
        type: types.UPDATECARTMETAQUANTITY,
        payload: resp
    }
}

export function deleteCartMetaItem(cartMetaId) {
    const resp = axios.delete('/api/cart-meta/product/' + {cartMetaId}, {
        data: {
            id: cartMetaId
        }
    });
    return {
        type: types.DELETECARTMETAITEM,
        payload: resp
    }
}

export function updateSummary(summaryId) {
    const resp = axios.put('/api/summary/' + {summaryId}, {
        id: summaryId
    });
    return {
        type: types.UPDATESUMMARY,
        payload: resp
    }
}

export function addCartAlert() {
    return {
        type: types.ADDCARTALERT,
        cartAlert: "pulse"
    }
}    
