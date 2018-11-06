import React, { Component } from 'react';
import M from 'materialize-css/';

class Modal extends Component {
  elems = null;
  modal = null;

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.isShow !== this.props.isShow ||
      nextProps.children !== this.props.children
    ) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    this.elems = document.querySelectorAll('.modal');
    this.modal = M.Modal.init(this.elems, {
      onCloseEnd: () => {
        this.props.whenClosed();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div
          id={this.props.modalId}
          className={`modal ${this.props.modalType}`}
        >
          <div className="modal-content">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
