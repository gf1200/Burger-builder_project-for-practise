import React from 'react';

const PrimaryBTN = ({ name, whenClicked }) => {
  return (
    <button className="btn teal waves-effect waves-light" onClick={whenClicked}>
      {name}
    </button>
  );
};

export default PrimaryBTN;
