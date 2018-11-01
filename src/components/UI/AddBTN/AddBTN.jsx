import React from 'react';
import style from './AddBTN.module.scss';

const AddBTN = ({ modalShow, target }) => {
  return (
    <button
      onClick={modalShow}
      data-target={target}
      className={[
        'btn-floating btn-large teal waves-effect waves-light z-depth-4 modal-trigger ' +
          style.add
      ].join(' ')}
    >
      <i className="material-icons">add</i>
    </button>
  );
};

export default AddBTN;
