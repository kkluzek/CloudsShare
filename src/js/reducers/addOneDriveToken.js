import {ADD_ONE_DRIVE_TOKEN} from "../actions/types";

export default function(state = {}, action){
    switch(action.type){
        case ADD_ONE_DRIVE_TOKEN:
        return [
            ...state,
             {
                token: action.payload.token,
                expiry: action.payload.expiry
             }
            ];

        default:
            return state
    }
    return state;
}
