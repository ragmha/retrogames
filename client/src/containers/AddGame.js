import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';
import { submitGame, uploadPicture } from '../api';

class AddGame extends Component {
  state = {
    games: {},
  };

  setGame = games => {
    this.setState({ games });
  };

  submit = async () => {
    const newGame = {
      ...this.state.games,
      picture: $('#picture').attr('src'),
    };
    await submitGame(newGame);
    await hashHistory.push('/games');
  };

  render() {
    return (
      <Form
        submit={this.submit}
        uploadPicture={uploadPicture}
        setGame={this.setGame}
      />
    );
  }
}

export default AddGame;
