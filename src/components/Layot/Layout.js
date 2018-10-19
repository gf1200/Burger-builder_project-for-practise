import React from "react";
import Aux from "./../../hoc/Aux";

const layout = ({ children }) => (
  <Aux>
    <div>Tollbar, Side Drawer, Backdrop</div>
    <main>{children}</main>
  </Aux>
);

export default layout;
