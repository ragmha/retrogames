import {
  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_GAME,
} from '../constants/games.js';

const getGames = () => ({ type: GET_GAMES });

const getGamesSuccess = games => ({ type: GET_GAMES_SUCCESS, games });

const getGamesFailure = error => ({ type: GET_GAMES_FAILURE, error });

const setSearchBar = keyword => ({ type: SET_SEARCH_BAR, keyword });

const showSelectedGame = game => ({ type: SHOW_SELECTED_GAME, game });

export {
  getGames,
  getGamesSuccess,
  getGamesFailure,
  setSearchBar,
  showSelectedGame,
};
