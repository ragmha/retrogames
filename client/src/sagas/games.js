import { takeLatest, put, call } from 'redux-saga/effects'; // Useful to interact with Saga Middleware

import { GET_GAMES } from '../constants/games'; // Saga takes care of GET_GAMES action ⚡️
import { getGamesSuccess, getGamesFailure } from '../actions/games'; // Either one is yielded when fetch is done!
import { getGames as fetchGames } from '../api';

function* getGames() {
  try {
    const games = yield call(fetchGames);
    yield put(getGamesSuccess(games));
  } catch (error) {
    yield put(getGamesFailure(error));
  }
}

// The watcher saga waits for dispatched GET_GAMES actions
function* watchGetGames() {
  yield takeLatest(GET_GAMES, getGames);
}

// The watcher will run parallel
export { watchGetGames };
