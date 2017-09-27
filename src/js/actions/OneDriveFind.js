import {FIND_ONE_DRIVE} from "./types";
import axios from 'axios';

export function actionFindOD(token, query = "") {
    const msGraphApiRoot = "https://graph.microsoft.com/v1.0/me/";
    const path = "drive/root/";
    const command = "search(q='" + query + "')";
    const url = msGraphApiRoot + path + command;
    const request = axios({
        method: 'get',
        url: url,
        headers: {"Authorization": "Bearer " + token}
    });
    return {
        type: FIND_ONE_DRIVE,
        payload: request,
        middleware: true
    }
}
