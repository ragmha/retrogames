import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import { Modal, GameListManager } from '../components/';
import * as gamesActionCreators from '../actions/games';

class Games extends PureComponent {
  componentDidMount() {
    this.getGames();
  }

  toggleModal = index => {
    this.props.gamesActions.showSelectedGame(this.props.games[index]);
    $('#game-modal').modal();
  };

  getGames() {
    this.props.gamesActions.getGames();
  }

  deleteGame = id => {
    this.props.gamesActions.deleteGame(id);
  };

  setSearchBar = event => {
    this.props.gamesActions.setSearchBar(event.target.value.toLowerCase());
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
  gamesActions: bindActionCreators(gamesActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
