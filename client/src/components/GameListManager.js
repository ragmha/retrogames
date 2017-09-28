import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Game from './Game';

const GameListManager = ({
  games,
  searchBar,
  setSearchBar,
  toggleModal,
  deleteGame,
}) => (
  <div className="container scrollable">
    <div className="row text-left">
      <Link to="/games/add" className="btn btn-danger">
        Add a new Game!
      </Link>
    </div>
    <div className="row">
      <input
        type="search"
        placeholder="Search by Name"
        className="form-control search-bar"
        onKeyUp={setSearchBar}
      />
    </div>
    <div className="row">
      {games
        .filter(game => game.name.toLowerCase().includes(searchBar))
        .map((game, index) => (
          <Game
            key={game._id}
            i={index}
            toggleModal={toggleModal}
            deleteGame={deleteGame}
            {...game}
          />
        ))}
    </div>
    <hr />
  </div>
);

GameListManager.propTypes = {
  games: PropTypes.array,
  searchBar: PropTypes.string,
  setSearchBar: PropTypes.func,
  toggleModal: PropTypes.func,
  deleteGame: PropTypes.func,
};

export default GameListManager;
