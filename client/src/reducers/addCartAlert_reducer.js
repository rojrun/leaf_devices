import types from '../actions/types';

const DEFAULT_STATE = {
    cartAlert: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADDCARTALERT:
            return { ...state, cartAlert: action.cartAlert};
        default:
            return state;
    }
}