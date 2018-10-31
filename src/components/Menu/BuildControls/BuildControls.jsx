import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Breakfast', type: 'breakfast' },
  { label: 'Lunch', type: 'lunch' },
  { label: 'Supper', type: 'supper' }
];

const buildControl = ({
  mealeAdded,
  mealRemoved,
  disabld,
  confirmDisabld,
  target,
  modalShow
}) => (
  <ul className="collection z-depth-5">
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => mealeAdded(ctrl.type)}
        removed={() => mealRemoved(ctrl.type)}
        disabled={disabld[ctrl.type]}
      />
    ))}
    <li className="collection-item">
      <button
        className="waves-effect waves-light btn-small modal-trigger"
        disabled={!confirmDisabld}
        data-target={target}
      >
        Summary plan
      </button>
    </li>
  </ul>
);

export default buildControl;
