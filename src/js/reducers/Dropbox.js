import {ADD_DROPBOX_TOKEN, FETCH_DROPBOX, FIND_DROPBOX, LOGOUT_DROPBOX} from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_DROPBOX_TOKEN:
            return {
                ...state,
                token: action.payload.token,
                expire: action.payload.expire
            };
        case FETCH_DROPBOX:
            return {
                ...state,
                response: action.payload.response
            };
        case FIND_DROPBOX:
            return {
                ...state,
                response: action.payload.response
            };
        case LOGOUT_DROPBOX:
            return {};
        default:
            return state;
    }
}