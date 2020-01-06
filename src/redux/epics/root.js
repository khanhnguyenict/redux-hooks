


import { combineEpics } from 'redux-observable';
import countEpic from './downloadEpics';

const rootEpic = combineEpics(
  countEpic
);

export default rootEpic;