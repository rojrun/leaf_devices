import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import kitReducer from './kit_reducer';
import cartReducer from './cart_reducer';
import summaryReducer from './summary_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    products: kitReducer,
    cart: cartReducer,
    summary: summaryReducer
});

export default rootReducer;