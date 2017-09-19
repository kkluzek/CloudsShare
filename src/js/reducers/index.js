import {combineReducers} from 'redux';
import OneDrive from "./OneDrive";
import Dropbox from "./Dropbox";

const rootReducers = combineReducers({
    OneDrive,
    Dropbox
});

export default rootReducers