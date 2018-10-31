import React from 'react';
import style from './AddBTN.module.scss';

const AddBTN = ({ modalShow, target }) => {
  return (
    <button
      onClick={modalShow}
      data-target={target}
      class={[
        'btn-floating btn-large waves-effect waves-light z-depth-4 modal-trigger ' +
          style.add
      ].join(' ')}
    >
      <i class="material-icons">add</i>
    </button>
  );
};

export default AddBTN;
