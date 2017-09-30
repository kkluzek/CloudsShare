import {FETCH_ONE_DRIVE} from "./types";
import axios from "axios";

export function oneDriveFetchFiles(token, path = "/drive/root") {
    let trimPath = "";
    if (path === "/drive/root:" || "" === path || path === "/drive") {
        trimPath = "/drive/root";
    } else {
        trimPath = path;
    }
    const msGraphApiRoot = "https://graph.microsoft.com/v1.0/me";
    const odurl = msGraphApiRoot + encodeURIComponent(trimPath);
    const thumbnailSize = "large";
    const odquery = "?expand=thumbnails,children(expand=thumbnails(select=" + thumbnailSize + "))";

    const request = axios({
        method: 'get',
        url: odurl + odquery,
        headers: {"Authorization": "Bearer " + token}
    });
    return {
        type: FETCH_ONE_DRIVE,
        payload: request,
        middleware: true
    }
}