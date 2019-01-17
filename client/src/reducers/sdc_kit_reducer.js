import types from '../actions/types';

const DEFAULT_STATE = {
    products: [],

};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.PRODUCTS:
            console.log("PRODUCTS:", action);
            return {...state, products: action.payload.data.products};
        default:
            return state;
    }
}

