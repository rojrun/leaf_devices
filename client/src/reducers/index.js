import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import sdcKitReducer from './sdc_kit_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    product: sdcKitReducer
});

export default rootReducer;