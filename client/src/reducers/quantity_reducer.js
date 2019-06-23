import types from '../actions/types';

const DEFAULT_STATE = [
    {
        id: null,
        quantity: 0
    }
];

export default (state= DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.ADD_QUANTITY:
            console.log("quantity reducer:", state);
            return {...state, quantity: action.payload + 1};
        case types.MINUS_QUANTITY:
            console.log("quantity reducer:", state);
            return {...state, quantity: action.payload -1};        
        default:
            return state;    
    }
}