import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import sdcKitBlackReducer from './sdcKitBlack_reducer';
import sdcKitBlueReducer from './sdcKitBlue_reducer';
import sdcKitGreenReducer from './sdcKitGreen_reducer';
import sdcKitPurpleReducer from './sdcKitPurple_reducer';
import sdcKitRedReducer from './sdcKitRed_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    PRODUCTBlack: sdcKitBlackReducer,
    PRODUCTBlue: sdcKitBlueReducer,
    PRODUCTGreen: sdcKitGreenReducer,
    PRODUCTPurple: sdcKitPurpleReducer,
    PRODUCTRed: sdcKitRedReducer
});

export default rootReducer;