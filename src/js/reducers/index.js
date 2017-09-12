import {combineReducers} from 'redux';
import addOneDriveToken from "./addOneDriveToken";

const rootReducers = combineReducers({
    ODTokens: addOneDriveToken
});

export default rootReducers