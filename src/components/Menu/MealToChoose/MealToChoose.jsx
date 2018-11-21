import React from 'react';

const MealToChoose = ({ meals, addMeal, chosen }) => {
  const mealToChooseList = meals.map(meal => {
    let countChosenMeal = chosen.filter(
      chosenMeal => chosenMeal.key === meal.key
    ).length;

    const badge = countChosenMeal ? (
      <span
        className="new badge teal lighten-5 black-text"
        data-badge-caption=""
      >
        {countChosenMeal}
      </span>
    ) : null;

    const active = countChosenMeal ? 'active' : '';

    return (
      <li
        key={meal.key}
        onClick={() => addMeal(meal)}
        className={`collection-item ${active}`}
      >
        {meal.name}
        {badge}
      </li>
    );
  });

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
