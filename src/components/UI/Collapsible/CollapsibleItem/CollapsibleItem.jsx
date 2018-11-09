import React from 'react';

const CollapsibleItem = ({ item }) => {
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
        </ul>
      </div>
    </li>
  );
};

export default CollapsibleItem;
