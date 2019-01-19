import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import kitReducer from './kit_reducer';


const rootReducer = combineReducers({
    form: formReducer,
    products: kitReducer
});

export default rootReducer;