import React from 'react';
import { withRouter } from 'react-router-dom';
import PrimaryBTN from './../../UI/PrimaryBTN';
const ChosenMeals = ({ meals, deleteMeal, createClicked, createDisable }) => {
  let transformedMeals = (meals || [])
    .map((meal, index) => {
      return (
        <li className="collection-item" key={index}>
          <div>
            {meal.name}
            <a
              href="#!"
              className="secondary-content"
              onClick={() => deleteMeal(meal.id)}
            >
              <i className="material-icons">delete</i>
            </a>
          </div>
        </li>
      );
    })
    .reduce((arr, next) => {
      return arr.concat(next);
    }, []);

  if (transformedMeals.length === 0) {
    transformedMeals = (
      <li>
        <div className=" collapsible-header">
          <i className="material-icons ">info_outline</i>
          Please add plan title and some meals
        </div>
      </li>
    );
  }

  return (
    <React.Fragment>
      <ul className="collection">{transformedMeals}</ul>
      <PrimaryBTN
        name="create"
        whenClicked={createClicked}
        disabled={createDisable}
      />
    </React.Fragment>
  );
};

export default withRouter(ChosenMeals);
