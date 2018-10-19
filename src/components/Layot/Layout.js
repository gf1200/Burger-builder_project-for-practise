import React from "react";
import Aux from "./../../hoc/ReactAux";
import classes from "./Layout.module.scss";

console.log(classes.content);

const layout = ({ children }) => (
  <Aux>
    <div>Tollbar, Side Drawer, Backdrop</div>
    <main className={classes.content}>{children}</main>
  </Aux>
);

export default layout;
