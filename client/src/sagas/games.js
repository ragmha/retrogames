import { takeLatest, put, call, select } from 'redux-saga/effects';
import { GET_GAMES, POST_GAME, DELETE_GAME } from '../constants/games';

import {
  getGamesSuccess,
  getGamesFailure,
  postGameSuccess,
  postGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
} from '../actions/games'; // Either one is yielded when fetch is done!

import {
  getGames as fetchGames,
  submitGame as postServerGame,
  deleteGame as deleteServerGame,
} from '../api';

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

// Selector to get the picture from the state
const selectedPicture = state => state.getIn(['filestack', 'url'], '');

// Selector to get the game from the state
const getGameForm = state => state.getIn(['form', 'game']).toJS();

function* postGame() {
  // Access the state to retrieve the new game information
  const picture = yield select(selectedPicture);
  const game = yield select(getGameForm);

  // Create a newGame object to be sent to the server
  const newGame = Object.assign({}, { picture }, game.values);
  try {
    yield call(postServerGame, newGame);
    yield put(postGameSuccess());
  } catch (error) {
    yield put(postGameFailure(error));
  }
}

function* watchPostGame() {
  yield takeLatest(POST_GAME, postGame);
}

// The watcher will run parallel
export { watchGetGames, watchDeleteGame, watchPostGame };
