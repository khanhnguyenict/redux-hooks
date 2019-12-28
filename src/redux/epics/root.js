


import { combineEpics } from 'redux-observable';
import countEpic from './epics';

const rootEpic = combineEpics(
  countEpic
);

export default rootEpic;