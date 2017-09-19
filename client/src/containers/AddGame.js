import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';
import { submitGame, uploadPicture as FileUpload } from '../api';

class AddGame extends Component {
  state = {
    games: {},
  };

  setGame = games => {
    this.setState({ games });
  };

  submit = async () => {
    await submitGame(this.state.games);
    await hashHistory.push('/games');
  };

  render() {
    return (
      <Form
        submit={this.submit}
        uploadPicture={FileUpload}
        setGame={this.setGame}
      />
    );
  }
}

export default AddGame;
