import types from '../actions/types';

const DEFAULT_STATE = {
    addToShipMethod: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){   
        case types.ADDTOSHIPMETHOD:
            return { ...state, addToShipMethod: action.addToShipMethod};
        default:
            return state;
    }
}