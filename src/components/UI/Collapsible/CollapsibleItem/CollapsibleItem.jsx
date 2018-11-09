import React from 'react';
import PrimaryBTN from '../../PrimaryBTN';

const CollapsibleItem = ({ item, onCurrentSet }) => {
  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons grey-text">more_vert</i>
        {item.title}
      </div>
      <div className="collapsible-body">
        <ul className="collection">
          {item.meals.map(plan => (
            <li key={plan.id} className="collection-item">
              {plan.name}
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