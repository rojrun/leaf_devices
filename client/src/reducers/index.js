import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import kitReducer from './kit_reducer';
import getCartMetaReducer from './getCartMeta_reducer';
import summaryReducer from './summary_reducer';
import addCartAlertReducer from './addCartAlert_reducer';
import customerReducer from './customer_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    products: kitReducer,
    cart: getCartMetaReducer,
    summary: summaryReducer,
    addCartAlert: addCartAlertReducer,
    customer: customerReducer,
    user: userReducer
});

export default rootReducer;