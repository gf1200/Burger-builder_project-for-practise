import React from 'react';

const MealSummery = ({ meals }) => {
  const mealsSummery = Object.keys(meals).map(mealKey => (
    <li key={mealKey} className="collection-item">
      {mealKey}
    </li>
  ));

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Meal summery</h4>
      </li>
      {mealsSummery}
    </ul>
  );
};

export default MealSummery;
