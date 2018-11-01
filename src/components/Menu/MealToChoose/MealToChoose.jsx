import React from 'react';

const MealToChoose = ({ meals, addMeal }) => {
  const mealToChooseList = meals.map(meal => (
    <li key={meal.id} onClick={() => addMeal(meal)} className="collection-item">
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
