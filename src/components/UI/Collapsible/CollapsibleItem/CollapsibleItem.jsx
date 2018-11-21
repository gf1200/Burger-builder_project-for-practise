import React from 'react';
import PrimaryBTN from '../../PrimaryBTN';

const CollapsibleItem = ({ plan, onCurrentSet }) => {
  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons grey-text">more_vert</i>
        {plan.title}
      </div>
      <div className="collapsible-body">
        <ul className="collection">
          {plan.meals.map((meal, index) => (
            <li key={index} className="collection-item">
              {meal.name}
            </li>
          ))}
          <li className="collection-item">
            <br />
            <PrimaryBTN name="set curent" whenClicked={onCurrentSet} />
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CollapsibleItem;
