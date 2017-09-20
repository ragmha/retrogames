import Immutable from 'immutable';

import {
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_GAME,
} from '../constants/games';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES_SUCCESS: {
      // returns a new state with fetched games in state
      return state.merge({
        list: action.games,
      });
    }
    case SET_SEARCH_BAR: {
      return state.merge({
        searchBar: action.keyword,
      });
    }

    case SHOW_SELECTED_GAME: {
      return state.merge({
        selectedGame: action.game,
      });
    }

    case GET_GAMES_FAILURE: {
      // returns a new empty state
      return state.clear();
    }
    default:
      return state;
  }
};
