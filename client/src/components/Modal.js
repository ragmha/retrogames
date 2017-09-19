import React from 'react';

const Modal = ({ game }) => (
  <div
    className="modal fade"
    id="game-modal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h4
            className="modal-title"
            id="myModalLabel"
          >{`${game.name} (${game.year})`}</h4>
        </div>
        <div className="modal-body">
          <div>
            <img src={game.picture} className="img-responsive img-big" />
          </div>
          <hr />
          <p>{game.description}</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-warning"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
