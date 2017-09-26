import { takeLatest, put, call, select } from 'redux-saga/effects';
import { GET_GAMES, DELETE_GAME } from '../constants/games';

import {
  getGamesSuccess,
  getGamesFailure,
  deleteGameSuccess,
  deleteGameFailure,
} from '../actions/games'; // Either one is yielded when fetch is done!

import { getGames as fetchGames, deleteGame as deleteServerGame } from '../api';

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

// Selector Function to return the games list from the state
const selectedGames = state => state.getIn(['games', 'list']).toJS();

function* deleteGame(action) {
  const { id } = action;
  const games = yield select(selectedGames); // Taking games from the state
  try {
    yield call(deleteServerGame, id);
    yield put(deleteGameSuccess(games.filter(game => game._id !== id)));
  } catch (error) {
    yield put(deleteGameFailure(error));
  }
}

function* watchDeleteGame() {
  yield takeLatest(DELETE_GAME, deleteGame);
}

// The watcher will run parallel
export { watchGetGames, watchDeleteGame };
