import React from "react";
import Aux from "./../../hoc/ReactAux";

const layout = ({ children }) => (
  <Aux>
    <nav>
      <div className="nav-wrapper cyan darken-4">
        <a href="index.html" className="brand-logo center">
          Daily meal planner
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down" />
      </div>
    </nav>

    <main className="container">{children}</main>

    <footer>
      <div className="footer-copyright cyan darken-4">
        <div className="container center-align white-text ">
          2018 Daily meal planner. Create by gf1200
        </div>
      </div>
    </footer>
  </Aux>
);

export default layout;
