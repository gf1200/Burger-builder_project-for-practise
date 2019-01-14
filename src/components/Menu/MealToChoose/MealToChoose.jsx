import React from 'react';

const MealToChoose = ({ meals, addMeal, chosen }) => {
  const mealToChooseList = meals.map(meal => {
    let countChosenMeal = chosen.filter(
      chosenMeal => chosenMeal.key === meal.key
    ).length;

    const badge = countChosenMeal ? (
      <span className="tag is-primary is-rounded">{countChosenMeal}</span>
    ) : null;

    const active = countChosenMeal ? 'is-active' : '';

    return (
      <div key={meal.key} onClick={() => addMeal(meal)} className={`media`}>
        <div className="media-content">
          <span className={`button is-white ${active}`}>{meal.name}</span>
        </div>
        <div className="media-right">{badge}</div>
      </div>
    );
  });

  return (
    <>
      <h1 className="title is-4">Choose meal: </h1>
      {mealToChooseList}
    </>
  );
};

export default MealToChoose;
