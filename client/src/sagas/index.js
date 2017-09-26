import { all, fork } from 'redux-saga/effects';
import { watchGetGames, watchDeleteGame } from './games.js';

export default function* rootSaga() {
  yield all([fork(watchGetGames), fork(watchDeleteGame)]); // starting all the sagas in parallel
}
