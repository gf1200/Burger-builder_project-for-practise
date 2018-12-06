import React from 'react';

const CollapsibleItem = ({ plan, onCurrentSet, currentPlanKey }) => {
  const checkoBoxHandler = e => {
    onCurrentSet();
  };
  const isCurrentPlan = plan.key === currentPlanKey ? true : false;
  return (
    <li>
      <div className={`collapsible-header ${isCurrentPlan ? 'teal teal-text text-lighten-5' : ''}`}>
        <i className={`material-icons ${isCurrentPlan ? 'teal teal-text text-lighten-5' : 'grey-text'}`}>more_vert</i>
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
            <div className="switch">
              <label>
                Set as current plan:
                <input type="checkbox" checked={isCurrentPlan ? true : false} onChange={e => checkoBoxHandler(e)} />
                <span className="lever" />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CollapsibleItem;
