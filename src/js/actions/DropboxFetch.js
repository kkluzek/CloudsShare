import {FETCH_DROPBOX} from "./types";
import Dropbox from "dropbox";


export function actionFetchDB(token, path = "") {
    const dbx = new Dropbox({accessToken: token});
    let request =dbx.filesListFolder({path: path});
    return {
        type: FETCH_DROPBOX,
        payload: request,
        middleware: true
    }
}


