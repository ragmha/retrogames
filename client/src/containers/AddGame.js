import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';

import * as gamesActionCreators from '../actions/games';
import * as filestackActionCreators from '../actions/filestack';

class AddGame extends Component {
  state = {
    games: {},
  };

  submit = event => {
    event.preventDefault();
    this.props.gamesActions.postGame();
    hashHistory.push('/games');
  };

  uploadPicture = () => {
    this.props.filestackActions.uploadPicture();
  };

  render() {
    return (
      <Form
        picture={picture}
        submit={this.submit}
        uploadPicture={this.uploadPicture}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    picture: state.getIn(['filestack', 'url'], ''),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gamesActions: bindActionCreators(gamesActionCreators, dispatch),
    filestackActions: bindActionCreators(filestackActionCreators, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddGame);
