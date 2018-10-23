import React from 'react';
import Meal from './Meal/Meal';
const menu = ({ meals, totalMeals }) => {
  let transformedMeals = Object.keys(meals)
    .map(mealKey => {
      return [...Array(meals[mealKey])].map((_, i) => {
        return <Meal key={mealKey + i} type={mealKey} />;
      });
    })
    .reduce((arr, next) => {
      return arr.concat(next);
    }, []);

  if (transformedMeals.length === 0) {
    transformedMeals = (
      <li>
        <div className=" collapsible-header">
          <i className="material-icons ">info_outline</i>
          Please add some meals to menu
        </div>
      </li>
    );
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Menu</h4>{' '}
        <span className="badge teal lighten-1 white-text">
          total: {totalMeals}
        </span>
      </li>
      {transformedMeals}
    </ul>
  );
};

export default menu;
