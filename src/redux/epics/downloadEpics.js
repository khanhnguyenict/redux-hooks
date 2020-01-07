import {
  switchMap,
  map
} from 'rxjs/operators';
import {
  ofType
} from 'redux-observable';
import {
  GET_DOWNLOAD,
} from "../actions/actionTypes";
import {
  getDownloadSuccess
} from '../actions/downloadAction';

import axios from 'axios';
import * as downloadService from '../service';
import {
  from
} from 'rxjs';



export const downloadEpic = action$ =>
  action$.pipe(
    ofType(GET_DOWNLOAD),
    switchMap(() =>
      from(downloadService.getDownload()).pipe(
        map(response => getDownloadSuccess(response))
      ))
  )

export default downloadEpic;
