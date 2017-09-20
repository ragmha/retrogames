import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import { getGames, deleteGame } from '../api';

import { Modal, GameListManager } from '../components';
import * as gameActionsCreators from '../actions/games';

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
    let gameID = this.props.games[index];
    this.props.gamesActions.showSelectedGame(gameID);
    $('#game-modal').modal();
  };

  getGames() {
    this.props.gamesActions.getGames();
  }

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
    this.props.gamesActions.setSearchBar(term);
  };

  render() {
    const { games, selectedGame, searchBar } = this.props;
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

const mapStateToProps = state => ({
  games: state.getIn(['games', 'list'], Immutable.List()).toJS(),
  searchBar: state.getIn(['games', 'searchBar'], ''),
  selectedGame: state.getIn(['games', 'selectedGame'], Immutable.List()).toJS(),
});

const mapDispatchToProps = dispatch => ({
  gamesActions: bindActionCreators(gameActionsCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
