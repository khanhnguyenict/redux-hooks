import {
  map,
  delay
} from 'rxjs/operators';
import {
  ofType
} from 'redux-observable';
import {
  ajax
} from 'rxjs/ajax';

const INCREMENT = 'INCREMENT';
const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';

const increment = () => ({
  type: INCREMENT,
  payload: {
    num: 1,
    isloading: false
  }
});
const incrementSucess = () => ({
  type: INCREMENT_SUCCESS,
  ayload: {
    num: -1,
    isloading: true
  }
});


const countEpic = (action$, state$) => action$.pipe(
  ofType(INCREMENT),
  delay(5000),
  map(() => incrementSucess())
);

export default countEpic;