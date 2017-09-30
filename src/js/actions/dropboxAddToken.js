import {ADD_DROPBOX_TOKEN} from "./types";

export function dropboxAddToken(token, expire) {
    return {
        type: ADD_DROPBOX_TOKEN,
        payload: {token, expire}
    }
}