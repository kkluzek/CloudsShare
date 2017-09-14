import {FETCH_ONE_DRIVE} from "./types";
import axios from "axios";

export function actionFetchOD(token, path = "/drive/root"){
    const msGraphApiRoot =  "https://graph.microsoft.com/v1.0/me";
    const trimPath = path === "/drive/root:" ? "/drive/root" : path;
    const odurl = msGraphApiRoot +  trimPath;
    const thumbnailSize = "large";
    const odquery = "?expand=thumbnails,children(expand=thumbnails(select=" + thumbnailSize + "))";

    const request = axios({
        method:'get',
        url: odurl + odquery,
        headers: { "Authorization": "Bearer " + token }
    });
    return {
        type: FETCH_ONE_DRIVE,
        payload: request
    }
}