import React from "react";
import Aux from "../../../hoc/ReactAux";

const mealSummery = ({ meals }) => {
  const mealsSummery = Object.keys(meals).map(mealKey => (
    <li class="collection-item">{mealKey}</li>
  ));

  return (
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Meal summery</h4>
      </li>
      {mealsSummery}
    </ul>
  );
};
export default mealSummery;
