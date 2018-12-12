import React from 'react';

import Logo from '../../Logo/Logo';

import { Link } from 'react-router-dom';

const toolbar = ({ children }) => (
  <nav className="z-depth-1">
    <div className="nav-wrapper teal ">
      <div className="container">
        <Link to="/" className="brand-logo left teal-text text-lighten-5">
          <Logo size="4rem" />
          Meal planner
        </Link>
        <a href="!#" data-target="mobile-demo" className="sidenav-trigger right">
          <i className="material-icons">menu</i>
        </a>
        {children}
      </div>
    </div>
  </nav>
);

export default toolbar;
