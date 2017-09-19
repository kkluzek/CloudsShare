import {FETCH_ONE_DRIVE} from "../actions/types";
import {FIND_ONE_DRIVE} from "../actions/types";

export default function({dispatch}) {
    return next => action => {
        if ((action.type !== FETCH_ONE_DRIVE && action.type !== FIND_ONE_DRIVE) ||
            !action.middleware ||
            !action.payload ||
            !action.payload.then){
            return next(action);
        }
        action.payload
            .then(response => {
                const newAction = { ...action, payload: {response}, middleware: false};
                dispatch(newAction);
            })
    }
}
