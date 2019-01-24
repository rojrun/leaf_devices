import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import kitReducer from './kit_reducer';
import addCartReducer from './addCart_reducer';
import getCartReducer from './getCart_reducer';
import addContactUsReducer from './contact_reducer';
import addCartMetaReducer from './addCartMeta_reducer';
import getCartMetaReducer from './getCartMeta_reducer';

const rootReducer = combineReducers({
    // form: formReducer,
    products: kitReducer,
    addCart: addCartReducer,
    getCart: getCartReducer,
    addContactUs: addContactUsReducer,
    addCartMeta: addCartMetaReducer,
    getCartMeta: getCartMetaReducer
});

export default rootReducer;