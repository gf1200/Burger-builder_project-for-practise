import React from "react";
import Meal from "./Meal/Meal";
const menu = ({ meals }) => {
  const transformedMeals = Object.keys(meals).map(mealKey => {
    return [...Array(meals[mealKey])].map((_, i) => {
      return <Meal key={mealKey + i} type={mealKey} />;
    });
  });

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Menu</h4>
      </li>
      {transformedMeals}
    </ul>
  );
};

export default menu;
