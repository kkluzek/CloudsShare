import {FETCH_DROPBOX} from "../actions/types";

export default function({dispatch}){
    return next => action => {
        if (action.type !== FETCH_DROPBOX || !action.middleware){
           return next(action);
        }

        action.payload
            .then(response => {;
                const newAction = { ...action, payload: {response}, middleware: false};
                dispatch(newAction);
            })
    }
}



