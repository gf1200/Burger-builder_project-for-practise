import React from 'react';
import NavigatIonItems from './../NavigationItems/NavigatIonItems';
import Logo from '../../Layot/Logo/Logo';
import SideNave from '../SIdeNave/SideNave';

const toolbar = props => (
  <nav className="z-depth-0">
    <div className="nav-wrapper cyan darken-4 ">
      <a href="index.html" className="brand-logo center">
        <Logo size="5rem" />
        Meal planner
      </a>
      <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <NavigatIonItems />
      <SideNave />
    </div>
  </nav>
);

export default toolbar;
