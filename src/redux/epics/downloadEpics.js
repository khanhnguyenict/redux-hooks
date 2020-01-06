import {
  switchMap,
  map
} from 'rxjs/operators';
import {
  ofType
} from 'redux-observable';
import {
  GET_DOWNLOAD
} from "../actions/actionTypes";
import * as service from '../service';
import {
  getDownloadSuccess
} from '../actions/downloadAction';



const countEpic = (action$, state$) => action$.pipe(
  ofType(GET_DOWNLOAD),
  switchMap(() => service.getDownload().pipe(
    map(response => getDownloadSuccess(response))
  ))
);

export default countEpic;
