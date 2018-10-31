import React from 'react';
import style from './AddBTN.module.scss';

const AddBTN = () => {
  return (
    <button
      class={[
        'btn-floating btn-large waves-effect waves-light z-depth-4 ' + style.add
      ].join(' ')}
    >
      <i class="material-icons">add</i>
    </button>
  );
};

export default AddBTN;
