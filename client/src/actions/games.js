import {
  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
} from '../constants/games.js';

const getGames = () => ({ type: GET_GAMES });

const getGamesSuccess = games => ({ type: GET_GAMES_SUCCESS, games });

const getGamesFailure = error => ({ type: GET_GAMES_FAILURE, error });

export { getGames, getGamesSuccess, getGamesFailure };
