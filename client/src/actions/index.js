import axios from 'axios';
import types from './types';

/******* products endpoint *******/
export function getProducts() {
    const resp = axios.get('/api/products');
    return {
        type: types.PRODUCTS,
        payload: resp
    }
}

/******* cart endpoint *******/
export function makeCart() {
    const resp = axios.post('/api/cart');
    return {
        type: types.MAKECART,
        payload: resp
    }
}

export function getCustomerID() {
    const resp = axios.get('/api/cart');
    return {
        type: types.CUSTOMERID,
        payload: resp
    }
}

// export function getCart() {
//     const resp = axios.get('/api/cart');
//     return {
//         type: types.GETCART,
//         payload: resp
//     }
// }

/******* cart-meta endpoint *******/
export function getCartMeta() {
    const resp = axios.get('/api/cart-meta');
    return {
        type: types.GETCARTMETA,
        payload: resp
    }
}

export function addToCartMeta(customer_id, id, productQuantity) {
    const resp = axios.post('/api/cart-meta', {
        customer_id: customer_id,
        product_id: id,
        quantity: productQuantity
    });
    return {
        type: types.ADDTOCARTMETA,
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

export function addCartAlert() {
    return {
        type: types.ADDCARTALERT,
        cartAlert: "pulse"
    }
} 

/******* summary endpoint *******/
export function getSummary() {
    const resp = axios.get('/api/summary');
    return {
        type: types.SUMMARY,
        payload: resp
    }
}

export function addToSummary() {
    const resp = axios.post('/api/summary');
    return {
        type: types.ADDTOSUMMARY,
        payload: resp
    }
}

export function updateSummary(summaryId, shippingMethod, shippingCost) {
    const resp = axios.put('/api/summary/' + {summaryId}, {
        id: summaryId,
        shipping_method: shippingMethod,
        shipping: shippingCost
    });
    return {
        type: types.UPDATESUMMARY,
        payload: resp
    }
}

/******* contact-message endpoint *******/
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
   
/******* guest-checkout endpoint *******/
export function addGuestCheckout( firstName, lastName, mailingAddress, mailingCity, mailingState, mailingZip, emailAddress, phoneNumber ) {
    const resp = axios.post('/api/guest-checkout', {
        first_name: firstName,
        last_name: lastName,
        mailing_address: mailingAddress,
        mailing_city: mailingCity,
        mailing_state: mailingState,
        mailing_zip: mailingZip,
        email_address: emailAddress,
        phone_number: phoneNumber
    });
    return {
        type: types.ADDGUESTCHECKOUT,
        payload: resp
    }
}

export function getCustomer() {
    const resp = axios.get('/api/guest-checkout');
    return {
        type: types.CUSTOMER,
        payload: resp
    }
}