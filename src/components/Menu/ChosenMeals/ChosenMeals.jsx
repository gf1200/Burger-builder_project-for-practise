import React from 'react';
const ChosenMeals = ({ meals, deleteMeal }) => {
  let transformedMeals = (meals || [])
    .map((meal, index) => {
      return (
        <li className="collection-item" key={index}>
          <div>
            {meal.name}
            <a
              href="#!"
              class="secondary-content"
              onClick={() => deleteMeal(meal.chosenId)}
            >
              <i class="material-icons">delete</i>
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
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Menu</h4>
      </li>
      {transformedMeals}
    </ul>
  );
};

export default ChosenMeals;
