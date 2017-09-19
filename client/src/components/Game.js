import React from 'react';

import { Link } from 'react-router';

const Game = ({
  _id,
  i,
  name,
  description,
  picture,
  toggleModal,
  deleteGame,
}) => (
  <div className="col-md-4">
    <div className="thumbnail">
      <div className="thumbnail-frame">
        <img src={picture} alt="..." className="img-responsive thumbnail-pic" />
      </div>
      <div className="caption">
        <h5>{name}</h5>
        <p className="description-thumbnail">{`${description.substring(
          0,
          150
        )}...`}</p>
        <div className="btn-group" role="group" aria-label="...">
          <button
            className="btn btn-success"
            role="button"
            onClick={() => toggleModal(i)}
          >
            View
          </button>
          <button
            className="btn btn-danger"
            role="button"
            onClick={() => deleteGame(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Game;
