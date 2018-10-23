import React from "react";

const buildControl = ({ label, added, removed, disabled }) => (
  <li className="collection-item">
    <span className="badge">0</span>
    <span className="title">{label}</span>
    <div>
      <button className="waves-effect waves-light btn-small" onClick={added}>
        <i className="material-icons left">add</i>
        Add
      </button>{" "}
      <button
        className="waves-effect waves-light btn-small"
        onClick={removed}
        disabled={disabled}
      >
        <i className="material-icons left">remove</i>
        Remove
      </button>
    </div>
  </li>
);
export default buildControl;
