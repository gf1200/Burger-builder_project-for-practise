import React from "react";
import M from "materialize-css/dist/js/materialize";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

const modal = ({ modalId, children }) => {
  return (
    <div id={modalId} class="modal">
      <div class="modal-content">{children}</div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  );
};

export default modal;
