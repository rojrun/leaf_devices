import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import kitReducer from './kit_reducer';
import addCartReducer from './addCart_reducer';
import makeCartReducer from './makeCart_reducer';
import addContactUsReducer from './contact_reducer';
import addToCartMetaReducer from './addToCartMeta_reducer';
import getCartMetaReducer from './getCartMeta_reducer';

const rootReducer = combineReducers({
    // form: formReducer,
    products: kitReducer,
    addCart: addCartReducer,
    makeCart: makeCartReducer,
    addContactUs: addContactUsReducer,
    addToCartMeta: addToCartMetaReducer,
    getCartMeta: getCartMetaReducer
});

export default rootReducer;