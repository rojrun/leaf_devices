import types from '../actions/types';

/* This reducer is to keep track of quantity state, with adding and subtracting quantity.
    It is used in sdc_kit.js and cart.js. */
const DEFAULT_STATE = {
    id: undefined,
    quantity: 0
};

// dispatch({ type: 'ADD_TO_CART', payload: { id: 3, quantity: 10 } })

export default (state= DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log("ADD_TO_CART reducer", state);
            if(state[action.payload.id] !== undefined) {
                return {
                    ...state,
                    // [action.payload.id]: state[action.payload.id] + action.payload.quantity
                    id: action.payload.id, 
                    quantity: state[action.payload.quantity] + action.payload.quantity
                }
            }
            return {
                ...state,
                // [action.payload.id]: action.payload.quantity
                id: action.payload.id,
                quantity: state.quantity + 1
            }

        case types.REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART reducer", state);
            if(!state[action.payload.id]) return state
            return {
                ...state,
                [action.payload.id]: Math.max(0, state[action.payload.id] - action.payload.quantity)
            } 
        default:
            return state;    
    }
}