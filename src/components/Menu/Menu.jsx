import React from "react";
import Meal from "./Meal/Meal";
const menu = () => {
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Menu</h4>
      </li>
      <Meal type="breakfast" />
      <Meal type="lunch" />
      <Meal type="supper" />
    </ul>
  );
};

export default menu;
