import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) {
      return true;
    }
    return false;
  }

  render() {
    const { close } = this.props;

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');

      M.Modal.init(elems, {
        onCloseEnd() {
          close();
        }
      });
    });

    return (
      <div id={this.props.modalId} className="modal">
        <div className="modal-content">{this.props.children}</div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
