import {ADD_ONE_DRIVE_TOKEN, FETCH_ONE_DRIVE, FIND_ONE_DRIVE, LOGOUT_ONE_DRIVE} from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_ONE_DRIVE_TOKEN:
            return {
                ...state,
                token: action.payload.token,
                expiry: action.payload.expiry
            };
        case FETCH_ONE_DRIVE:
            return {
                ...state,
                response: action.payload.response
            };
        case FIND_ONE_DRIVE:
            return {
                ...state,
                response: action.payload.response
            };
        case LOGOUT_ONE_DRIVE:
            return {};
        default:
            return state;
    }
}