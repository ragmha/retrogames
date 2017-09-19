import React, { Component } from 'react';
import { Modal, GameListManager } from '../components';
import { getGames, deleteGame } from '../api';

class Games extends Component {
  state = {
    games: [],
    selectedGame: {},
    searchBar: '',
  };

  componentDidMount() {
    this.getGames();
  }

  toggleModal = index => {
    let gameID = this.state.games[index];
    this.setState({ selectedGame: gameID });
    $('#game-modal').modal();
  };

  getGames = async () => {
    const games = await getGames();
    this.setState({ games });
  };

  deleteGame = async id => {
    const games = await deleteGame(id);
    const gameID = this.state.games.filter(game => game._id !== id);
    this.setState({
      games: gameID,
    });
    console.log('Deleted Game!');
  };

  setSearchBar = event => {
    let term = event.target.value.toLowerCase();
    this.setState({ searchBar: term });
  };

  render() {
    const { games, selectedGame, searchBar } = this.state;
    return (
      <div>
        <Modal game={selectedGame} />
        <GameListManager
          games={games}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
          deleteGame={this.deleteGame}
        />
      </div>
    );
  }
}

export default Games;
