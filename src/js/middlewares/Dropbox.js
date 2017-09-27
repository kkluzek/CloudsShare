import {FETCH_DROPBOX, FIND_DROPBOX, LOGOUT_DROPBOX} from "../actions/types";

export default function ({dispatch}) {
    return next => action => {
        if ((action.type !== FETCH_DROPBOX && action.type !== FIND_DROPBOX) || !action.middleware) {
            return next(action);
        }

        action.payload
            .then(response => {
                const newAction = {...action, payload: {response}, middleware: false};
                dispatch(newAction);
            })
            .catch(error => {
                alert("Dropbox error: ", error);
                const newAction = {type: LOGOUT_DROPBOX};
                dispatch(newAction);
            })
    }
}



