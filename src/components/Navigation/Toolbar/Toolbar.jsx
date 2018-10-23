import React from 'react';
import NavigatIonItems from './../NavigationItems/NavigatIonItems';

const toolbar = props => (
  <nav className="z-depth-0">
    <div className="nav-wrapper cyan darken-4 ">
      <a href="index.html" className="brand-logo center">
        Daily meal planner
      </a>
      <NavigatIonItems />
    </div>
  </nav>
);

export default toolbar;
