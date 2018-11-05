import React from 'react';

const MealToChoose = ({ meals, addMeal, alredyChosen }) => {
  const mealToChooseList = meals.map(meal => {
    let numberOfChosen = alredyChosen.filter(id => id === meal.id).length;

    const badge = numberOfChosen ? (
      <span className="new badge white black-text" data-badge-caption="added">
        {numberOfChosen}
      </span>
    ) : null;

    const active = numberOfChosen ? 'active' : '';

    return (
      <a
        href="#!"
        key={meal.id}
        onClick={() => addMeal(meal)}
        className={`collection-item ${active}`}
      >
        {meal.name}
        {badge}
      </a>
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
