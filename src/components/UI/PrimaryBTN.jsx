import React from 'react';

const PrimaryBTN = ({ name, whenClicked, disabled }) => {
  return (
    <button
      className="btn teal waves-effect waves-light"
      onClick={whenClicked}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default PrimaryBTN;
