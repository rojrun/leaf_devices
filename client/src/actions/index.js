import axios from 'axios';
import types from './types';
import config from '../config';

const {db} = config.index;

export function getProducts(){

    const resp = axios.get(db);

    return {
        type: types.PRODUCTS,
        payload: resp
    }
}