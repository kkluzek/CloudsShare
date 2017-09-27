import {FIND_DROPBOX} from "./types";
import Dropbox from "dropbox";

export function actionFindDB(token, query = "") {
    const dbx = new Dropbox({accessToken: token});
    let request = dbx.filesSearch({path: "", query: query});

    return {
        type: FIND_DROPBOX,
        payload: request,
        middleware: true
    }
}