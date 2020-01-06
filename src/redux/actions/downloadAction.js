import {
    GET_DOWNLOAD,
    GET_DOWNLOAD_SUCCESS,
    GET_DOWNLOAD_FAILED
} from "./actionTypes";


export const getDownload = isloading => ({
    type: GET_DOWNLOAD,
    isloading: isloading
});

export const getDownloadSuccess = payload => ({
    type: GET_DOWNLOAD_SUCCESS,
    payload
});

export const getDownloadFailed = payload => ({
    type: GET_DOWNLOAD_FAILED,
    payload
});