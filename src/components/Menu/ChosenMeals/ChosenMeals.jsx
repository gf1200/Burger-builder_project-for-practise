import React from 'react';
import { withRouter } from 'react-router-dom';
const ChosenMeals = ({ meals, deleteMeal, createClicked, createDisable }) => {
  let transformedMeals = (meals || [])
    .map((meal, index) => {
      return (
        <div className="media" key={index}>
          <div className="media-content">{meal.name}</div>
          <div className="media-right">
            <button className="delete" onClick={() => deleteMeal(index)} />
          </div>
        </div>
      );
    })
    .reduce((arr, next) => {
      return arr.concat(next);
    }, []);

  if (transformedMeals.length === 0) {
    transformedMeals = (
      <div class="notification">
        Please add plan <strong>title</strong> and some <strong>meals</strong>.
      </div>
    );
  }

  return <>{transformedMeals}</>;
};

export default withRouter(ChosenMeals);
