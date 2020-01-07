import {
    GET_DOWNLOAD,
    GET_DOWNLOAD_SUCCESS,
    GET_DOWNLOAD_FAILED
} from "./actionTypes";


export const getDownload = isloading => ({
    type: GET_DOWNLOAD,
   payload:{
    isloading: true,
    data: {}
   }
});

export const getDownloadSuccess = response => ({
    type: GET_DOWNLOAD_SUCCESS,
    payload: {
        isloading: false,
        data: response
    }
});

export const getDownloadFailed = payload => ({
    type: GET_DOWNLOAD_FAILED,
    isloading: false,
    data: payload
});