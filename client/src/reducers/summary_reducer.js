import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SUMMARY:
            console.log("from SUMMARY reducer:", action.payload.data.results);
            return {...state, single: action.payload.data.results};
        default:
            return state;
    }
}