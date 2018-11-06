import React from 'react';
import { withRouter } from 'react-router-dom';
import PrimaryBTN from './../../UI/PrimaryBTN';
const ChosenMeals = ({ meals, deleteMeal, confirmClicked, confirmDisable }) => {
  let transformedMeals = (meals || [])
    .map((meal, index) => {
      return (
        <li className="collection-item" key={index}>
          <div>
            {meal.name}
            <a
              href="#!"
              className="secondary-content"
              onClick={() => deleteMeal(meal.chosenId)}
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
          Please add some meals to menu
        </div>
      </li>
    );
  }

  return (
    <React.Fragment>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Menu</h4>
        </li>
        {transformedMeals}
      </ul>
      <PrimaryBTN
        name="confirm plan"
        whenClicked={confirmClicked}
        disabled={confirmDisable}
      />
    </React.Fragment>
  );
};

export default withRouter(ChosenMeals);
