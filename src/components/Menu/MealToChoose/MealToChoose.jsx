import React from 'react';

const MealToChoose = ({ meals }) => {
  const mealToChooseList = meals.map(meal => (
    <li key={meal.id} className="collection-item">
      {meal.name}
    </li>
  ));

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Choose meal: </h4>
      </li>
      {mealToChooseList}
    </ul>
  );
};

export default MealToChoose;
