import React from 'react';

const navigationItem = ({ link, active, children }) => (
  <li className={active ? ['active'] : null}>
    <a href={link}>{children}</a>
  </li>
);

export default navigationItem;
