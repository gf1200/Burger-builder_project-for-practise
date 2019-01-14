import React from 'react';
import { Link } from 'react-router-dom';
const Brand = () => {
  return (
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <p class="control  is-size-3">Meals planner</p>
      </Link>
      <a
        href="#!"
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target=""
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  );
};

export default Brand;
