import { all, fork } from 'redux-saga/effects';
import { watchGetGames } from './games.js';

export default function* rootSaga() {
  yield all([fork(watchGetGames)]); // starting all the sagas in parallel
}
