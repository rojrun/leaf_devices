import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import kitReducer from './kit_reducer';
import getCartMetaReducer from './getCartMeta_reducer';
import summaryReducer from './summary_reducer';
import addCartAlertReducer from './addCartAlert_reducer';
import customerReducer from './customer_reducer';
import cartReducer from './cart_reducer';
import userReducer from './user_reducer';
import shippingReducer from './shipping_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    products: kitReducer,
    getCartMeta: getCartMetaReducer,
    summary: summaryReducer,
    addCartAlert: addCartAlertReducer,
    customer: customerReducer,
    cart: cartReducer,
    user: userReducer,
    shipping: shippingReducer
});

export default rootReducer;