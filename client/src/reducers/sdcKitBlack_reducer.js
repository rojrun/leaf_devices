import types from '../actions/types';

const DEFAULT_STATE = {
    single: {},

};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.PRODUCTBlack:
            console.log("PRODUCTBlack:", action);
            return {...state, single: action.payload.data.results};
        default:
            return state;
    }
}