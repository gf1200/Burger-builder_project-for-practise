import React from 'react';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
// import style from './Layout.module'

const layout = ({ children }) => (
  <React.Fragment>
    <Toolbar />
    <main className="container">{children}</main>

    <footer>
      <div className="footer-copyright cyan darken-4 ">
        <div className="container center-align white-text ">
          2018 Daily meal planner. Create by gf1200
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default layout;
