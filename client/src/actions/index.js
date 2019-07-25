import axios from 'axios';
import types from './types';

export function signOut(){
    return {
        type: types.SIGN_OUT
    }
}

export function addSignUp(name, email, password) {
    return async function(dispatch) {
        const resp = await axios.post('/api/sign-up', {
            name: name,
            email: email,
            password: password
        });

        dispatch({
            type: types.ADDSIGNUP
        });
    }
}

export async function checkAuth(dispatch){
    const resp = await axios.get('/api/is-signed-in');

    dispatch({
        type: types.CHECK_AUTH,
        auth: resp.data.auth
    });
}

export function addSignIn(email, password) {
    return async function(dispatch){
        const resp = await axios.post('/api/sign-in', {
            email: email,
            password: password
        });

        return resp.data;

        dispatch({
            type: types.ADDSIGNIN
        });
    }
    
}

export function addToCart(id, quantity) {
    return {
        type: types.ADD_TO_CART,
        payload: {
            id,
            quantity 
        }    
    }
}

export function removeFromCart(id, quantity) {
    return {
        type: types.REMOVE_FROM_CART,
        payload: {
            id,
            quantity 
        }          
    }
}

/******* products endpoint *******/
export function getProducts() {
    return async function(dispatch) {
        const resp = await axios.get('/api/products');

        dispatch({
            type: types.PRODUCTS,
            payload: resp
        });
    }
}    

/******* cart endpoint *******/
export function getCart() {
    return async function(dispatch) {
        const resp = await axios.get('/api/cart');
        
        dispatch({
            type: types.GETCART,
            payload: resp
        });
    }    
}

export function makeCart() {
    return async function(dispatch) {
        const resp = await axios.post('/api/cart');

        dispatch({
            type: types.MAKECART
        });
    }    
}

export function updateCartStatus() {
    return async function(dispatch) {
        const resp = await axios.put('/api/cart');

        dispatch({
            type: types.UPDATE_CART_STATUS
        });
    }    
}

/******* cart-meta endpoint *******/
export function getCartMeta() {
    return async function(dispatch) {
        const resp = await axios.get('/api/cart-meta');
        
        dispatch({
            type: types.GETCARTMETA,
            payload: resp
        });
    }    
}

export function addToCartMeta(id, productQuantity) {
    return async function(dispatch) {
        const resp = await axios.post('/api/cart-meta', {
            product_id: id,
            quantity: productQuantity
        });

        dispatch({
            type: types.ADDTOCARTMETA
        });

        return resp;
    }
}

export function updateCartMetaQuantity(cartId, productQuantity) {
    return async function(dispatch) {
        const resp = await axios.put('/api/cart-meta/product/' + {cartId}, {
            id: cartId,
            quantity: productQuantity
        });

        dispatch({
            type: types.UPDATECARTMETAQUANTITY
        });
    }    
}

export function deleteCartMetaItem(cartMetaId) {
    return async function(dispatch) {
        const resp = await axios.delete('/api/cart-meta/product/' + {cartMetaId}, {
            data: {
                id: cartMetaId
            }
        });

        dispatch({
            type: types.DELETECARTMETAITEM
        });
    }    
}

/* Adds cart notification to cart button */
export function addCartAlert(style) {
    return {
        type: types.ADDCARTALERT,
        payload: {
            cartAlert: style
        }
    }
} 

/* Removes cart notification when cart button is pressed */
export function removeCartAlert(style) {
    return {
        type: types.REMOVECARTALERT,
        payload: {
            cartAlert: style
        }
    }
}

/******* summary endpoint *******/
export function getSummary() {
    return async function(dispatch) {
        const resp = await axios.get('/api/summary');

        dispatch({
            type: types.SUMMARY,
            payload: resp
        });
    }    
}

export function addToSummary() {
    return async function(dispatch) {
        const resp = await axios.post('/api/summary');

        dispatch({
            type: types.ADDTOSUMMARY
        });

        return resp;
    }
}

export function updateSummary(shippingMethod, shippingCost) {
    return async function(dispatch) {
        const resp = await axios.put('/api/summary/', {
            shipping_method: shippingMethod,
            shipping: shippingCost
        });

        dispatch({
            type: types.UPDATESUMMARY
        });
    }    
}

/******* contact-message endpoint *******/
export function addContactMessage( your_fname, your_lname, your_email, your_phone_number, your_message ) {
    return async function(dispatch) {
        const resp = await axios.post('/api/contact-message', {
            first_name: your_fname,
            last_name: your_lname,
            email: your_email,
            phone_number: your_phone_number,
            message: your_message
        });

        dispatch({
            type: types.ADDCONTACTUS
        });
    }    
}
   
/******* checkout endpoint *******/
export function addCheckout( firstName, lastName, mailingAddress, mailingCity, mailingState, mailingZip, phoneNumber ) {
    return async function(dispatch) {
        const resp = await axios.post('/api/checkout', {
            first_name: firstName,
            last_name: lastName,
            mailing_address: mailingAddress,
            mailing_city: mailingCity,
            mailing_state: mailingState,
            mailing_zip: mailingZip,
            phone_number: phoneNumber
        });

        dispatch({
            type: types.ADDCHECKOUT
        });
    }    
}

export function getCustomer() {
    return async function(dispatch) {
        const resp = await axios.get('/api/checkout');

        dispatch({
            type: types.CUSTOMER,
            payload: resp
        });
    }    
}
