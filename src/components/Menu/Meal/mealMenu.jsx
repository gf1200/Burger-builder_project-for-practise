import React from "react";

const mealMenu = props => {
  let meal = null;

  switch (props.type) {
    case "breakfast":
      meal = <div>breakfast</div>;
      break;

    case "lunch":
      meal = <div>lunch</div>;
      break;

    case "supper":
      meal = <div>supper</div>;
      break;

    default:
      meal = null;

      return meal;
  }
};

export default mealMenu;
