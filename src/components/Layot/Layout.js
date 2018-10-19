import React from "react";
import Aux from "./../../hoc/ReactAux";

const layout = ({ children }) => (
  <Aux>
    <div>Tollbar, Side Drawer, Backdrop</div>
    <main>{children}</main>
  </Aux>
);

export default layout;
