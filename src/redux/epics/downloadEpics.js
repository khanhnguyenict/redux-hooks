import {
  switchMap,
} from 'rxjs/operators';
import {
  ofType
} from 'redux-observable';
import {
  GET_DOWNLOAD,
} from "../actions/actionTypes";
import * as service from '../service';
import {
  getDownloadSuccess
} from '../actions/downloadAction';

import 'rxjs';
 import axios from 'axios';
 import { from } from 'rxjs';
 import { mergeMap, map } from 'rxjs/operators';


 export const downloadEpic = action$ =>
   action$.pipe(
  ofType(GET_DOWNLOAD),
  switchMap(action =>
     from(axios.get('http://www.mocky.io/v2/5e0eb33634000090002d7c9c')).pipe(
      map(response => getDownloadSuccess(response))
     ))
)

export default downloadEpic;
