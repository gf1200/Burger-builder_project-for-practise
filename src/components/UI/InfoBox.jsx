import React from 'react';

const InfoBox = ({ children, color }) => {
  return (
    <div className={`card-panel ${color} lighten-5 ${color}-text center-align`}>
      {children}
    </div>
  );
};

export default InfoBox;
