import React from 'react';

const TextInput = ({ onChange, value }) => {
  return (
    <div className="row">
      <div className="input-field">
        <input
          id="plan_title"
          type="text"
          className="validate"
          value={value}
          onChange={onChange}
        />
        <label htmlFor="plan_title">Title</label>
      </div>
    </div>
  );
};
export default TextInput;
