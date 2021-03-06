import types from '../actions/types';

const DEFAULT_STATE = {
    all: []
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.PRODUCTS:
            return {...state, all: action.payload.data.results};
        default:
            return state;
    }
}