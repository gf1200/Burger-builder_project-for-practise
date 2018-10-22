import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Breakfast", type: "breakfast" },
  { label: "Lunch", type: "lunch" },
  { label: "Supper", type: "supper" }
];

const buildControl = ({ mealeAdded, mealRemoved, disabld }) => (
  <ul className="collection z-depth-5">
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => mealeAdded(ctrl.type)}
        removed={() => mealRemoved(ctrl.type)}
        disabled={disabld[ctrl.type]}
      />
    ))}
  </ul>
);

export default buildControl;
