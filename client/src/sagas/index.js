import { all, fork } from 'redux-saga/effects';
import { watchGetGames, watchPostGame, watchDeleteGame } from './games.js';
import { watchUploadPicture } from './filestack';

export default function* rootSaga() {
  yield all([
    fork(watchGetGames),
    fork(watchPostGame),
    fork(watchDeleteGame),
    fork(watchUploadPicture),
  ]); // starting all the sagas in parallel
}
