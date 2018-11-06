import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const navigationItem = ({ link, children, location }) => {
  return (
    <li className={location.pathname === link ? 'active' : ''}>
      <NavLink exact to={link}>
        {children}
      </NavLink>
    </li>
  );
};

export default withRouter(navigationItem);
