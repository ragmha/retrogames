import React, { Component } from 'react';
import { Link } from 'react-router';

class Form extends Component {
  setGame() {
    const game = {
      name: this.name.value,
      description: this.description.value,
      year: this.year.value,
      picture: this.picture.value,
    };
    this.props.setGame(game);
  }

  handleSubmit = async event => {
    event.preventDefault();
    await this.setGame();
    await this.props.submit();
  };

  render() {
    return (
      <div className="row scrollable">
        <div className="col-md-offset-2 col-md-8">
          <div className="text-left">
            <Link to="/games" className="btn btn-info">
              Back
            </Link>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="panel-title text-center">Add a Game!</h2>
            </div>
            <div className="panel-body">
              <form name="product-form" onSubmit={this.handleSubmit}>
                <div className="form-group text-left">
                  <label htmlFor="caption">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter the title"
                    ref={input => (this.name = input)}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Enter the description"
                    rows="5"
                    ref={input => (this.description = input)}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="price">Year</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter the year"
                    ref={input => (this.year = input)}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="picture">Picture</label>
                  <div className="text-center dropup">
                    <button
                      type="button"
                      className="btn btn-danger"
                      ref={input => (this.picture = input)}
                      onClick={() => this.props.uploadPicture}
                    >
                      Upload <span className="caret" />
                    </button>
                  </div>
                </div>
                <div className="form-group text-center">
                  <img id="picture" className="img-responsive img-upload" />
                </div>
                <button type="submit" className="btn btn-submit btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
