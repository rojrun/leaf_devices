import types from '../actions/types';

const DEFAULT_STATE = {
    quantity: 0
};

export default (state= DEFAULT_STATE, action) {
    switch (action.type) {
        case types.QUANTITY:
            return {...state, quantity: action.payload};
        default:
            return state;    
    }
}