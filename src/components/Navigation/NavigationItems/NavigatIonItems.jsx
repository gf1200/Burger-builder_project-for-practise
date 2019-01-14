import React from 'react';
import NavigationItem from './../NavigationItem/NavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavigatIonItems = ({ isAuth }) => (
  <>
    {isAuth ? (
      <div className="navbar-item">
        <NavigationItem link="/" hasClass="button is-white">
          <span class="icon">
            <FontAwesomeIcon icon="star" />
          </span>
          <span>Current</span>
        </NavigationItem>
        <NavigationItem link="/plans" hasClass="button is-white">
          <span class="icon">
            <FontAwesomeIcon icon="list-ul" />
          </span>
          <span>Plans</span>
        </NavigationItem>
        <NavigationItem link="/add" hasClass="button is-white">
          <span class="icon">
            <FontAwesomeIcon icon="plus" />
          </span>
          <span>Add</span>
        </NavigationItem>
        <NavigationItem link="/logout" hasClass="button is-white">
          <span>Logout</span>
        </NavigationItem>
      </div>
    ) : (
      <div class="navbar-item">
        <div class="buttons">
          <NavigationItem link="/login" hasClass="button">
            Log in
          </NavigationItem>
          <NavigationItem link="/signup" hasClass="button  is-primary">
            <strong>Sign Up</strong>
          </NavigationItem>
        </div>
      </div>
    )}
  </>
);

export default NavigatIonItems;
