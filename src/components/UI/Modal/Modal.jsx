import React, { Component } from 'react';
import M from 'materialize-css/';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isShow !== this.props.isShow) {
      return true;
    }
    return false;
  }

  render() {
    const { whenClosed } = this.props;

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');

      M.Modal.init(elems, {
        onCloseEnd() {
          whenClosed();
        }
      });
    });

    return (
      <div id={this.props.modalId} className="modal">
        <div className="modal-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
