import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

import { Form } from '../components';
import * as gamesActionCreators from '../actions/games';
import * as filestackActionCreators from '../actions/filestack';

class AddGame extends Component {
  submit = event => {
    event.preventDefault();
    this.props.gamesActions.postGame();
    hashHistory.push('/games');
  };

  uploadPicture = () => {
    this.props.filestackActions.uploadPicture();
  };

  render() {
    const { picture } = this.props;
    return (
      <Form
        picture={picture}
        handleSubmit={this.submit}
        uploadPicture={this.uploadPicture}
      />
    );
  }
}

const mapStateToProps = state => ({
  picture: state.getIn(['filestack', 'url'], ''),
});

const mapDispatchToProps = dispatch => ({
  gamesActions: bindActionCreators(gamesActionCreators, dispatch),
  filestackActions: bindActionCreators(filestackActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGame);
