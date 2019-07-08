import types from '../actions/types';

const DEFAULT_STATE = {
    shippingMethod: "Standard",
    shippingCost: 0
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.EXPEDITED_SHIPPING:
            console.log("shipping reducer, state:", state);
            return {
                ...state,
                shippingMethod: "Expedited",
                shippingCost: 375
            };
        // case types.STANDARD_SHIPPING:
        //     console.log("shipping reducer, state:", state);
        //     return {
        //         ...state,
        //         shippingMethod: "Standard",
        //         shippingCost: 0
        //     }    
        default:
            return state;
    }
}