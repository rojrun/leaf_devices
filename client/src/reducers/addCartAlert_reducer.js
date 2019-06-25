import types from '../actions/types';

const DEFAULT_STATE = {
    cartAlert: ""
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADDCARTALERT:
            return { ...state, cartAlert: action.payload.cartAlert};
        case types.REMOVECARTALERT:
            return { ...state, cartAlert: action.payload.cartAlert};    
        default:
            return state;
    }
}