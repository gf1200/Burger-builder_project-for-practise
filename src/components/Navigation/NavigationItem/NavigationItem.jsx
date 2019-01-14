import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const navigationItem = ({ link, children, hasClass }) => {
  return (
    <NavLink
      exact
      to={link}
      activeClassName="has-text-primary"
      className={`${hasClass}`}
    >
      {children}
    </NavLink>
  );
};

export default withRouter(navigationItem);
