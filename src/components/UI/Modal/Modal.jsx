import React from 'react';
import M from 'materialize-css/dist/js/materialize';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  M.Modal.init(elems);
});

const modal = ({ modalId, children }) => {
  return (
    <div id={modalId} className="modal">
      <div className="modal-content">{children}</div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  );
};

export default modal;
