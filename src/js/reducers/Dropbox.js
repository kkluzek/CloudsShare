import {ADD_DROPBOX_TOKEN, FETCH_DROPBOX} from "../actions/types";

export default function (state = {}, action) {
    switch (action.type){
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
    }
    return state;
}
