import React from 'react';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
// import style from './Layout.module'

const layout = ({ children }) => (
  <React.Fragment>
    <Toolbar />
    <main className="container">{children}</main>

    <footer>
      <div
        className="footer-copyright teal lighten-5 valign-wrapper"
        style={{ height: '4rem' }}
      >
        <div className="container center-align teal-text">
          2018 Daily meals planner. Create by gf1200
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default layout;
