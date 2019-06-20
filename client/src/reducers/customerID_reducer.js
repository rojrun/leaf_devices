import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.CUSTOMERID:
            console.log("customerid", action.payload.data.results);
            return {...state, single: action.payload.data.results};
        default:
            return state;
    }
}