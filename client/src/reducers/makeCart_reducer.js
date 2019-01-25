import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.MAKECART:
            // console.log('MAKECART reducer:', action.payload.data.results);
            return {...state, all: action.payload.data.results};
        default:
            return state;
    }
}