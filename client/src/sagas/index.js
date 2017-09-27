import { all, fork } from 'redux-saga/effects';
import { watchGetGames, watchPostGame, watchDeleteGame } from './games.js';
import { watchUploadPicture } from './filestack';

export default function* rootSaga() {
  yield all([fork(watchGetGames), fork(watchUploadPicture), fork(watchPostGame), fork(watchDeleteGame)];); // starting all the sagas in parallel
}
