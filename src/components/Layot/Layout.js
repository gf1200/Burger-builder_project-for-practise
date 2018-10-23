import React from 'react';
import Aux from './../../hoc/ReactAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ({ children }) => (
  <Aux>
    <Toolbar />
    <main className="container">{children}</main>

    <footer>
      <div className="footer-copyright cyan darken-4 ">
        <div className="container center-align white-text ">
          2018 Daily meal planner. Create by gf1200
        </div>
      </div>
    </footer>
  </Aux>
);

export default layout;
