import React from 'react';

import Logo from '../../Logo/Logo';
import SideNave from '../SIdeNave/SideNave';
import ToolbarNav from '../ToolbarNav/ToolbarNav';

const toolbar = props => (
  <nav className="z-depth-1">
    <div className="nav-wrapper teal ">
      <a href="index.html" className="brand-logo center">
        <Logo size="5rem" />
        Meal planner
      </a>
      <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <ToolbarNav />
      <SideNave />
    </div>
  </nav>
);

export default toolbar;
