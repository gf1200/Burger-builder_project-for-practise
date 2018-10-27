import React from 'react';

const PrimaryBTN = ({ name, whenClicked }) => {
  return (
    <button className="btn waves-effect waves-light" onClick={whenClicked}>
      {name}
    </button>
  );
};

export default PrimaryBTN;
