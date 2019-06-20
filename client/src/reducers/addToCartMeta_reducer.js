import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADDTOCARTMETA:
            console.log("addToCartMeta reducer", action);
            return {...state, all: action};
        default:
            return state;
    }
}