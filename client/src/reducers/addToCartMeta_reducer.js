import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADDTOCARTMETA:
            console.log('ADDTOCARTMETA reducer:', action.payload.data);
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}