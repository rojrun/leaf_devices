import axios from 'axios';
import types from './types';

export function getProducts(){

    const resp = axios.get('/api/products');

    return {
        type: types.PRODUCTS,
        payload: resp
    }
}