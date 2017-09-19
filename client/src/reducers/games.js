import Immutable from 'immutable';

import { GET_GAMES_SUCCESS, GET_GAMES_FAILURE } from '../constants/games.js';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES_SUCCESS: {
      // returns a new state with fetched games in state
      return state.merge({
        list: action.games,
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
