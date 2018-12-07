import React from 'react';
import NavigationItem from './../NavigationItem/NavigationItem';
const NavigatIonItems = props => (
  <React.Fragment>
    <NavigationItem link="/">
      <i className="material-icons left hide-on-med-and-down">star_border</i>
      Current
    </NavigationItem>
    <NavigationItem link="/plans">
      <i className="material-icons left hide-on-med-and-down">list</i>
      Plans
    </NavigationItem>
    <NavigationItem link="/add">
      <i className="material-icons left hide-on-med-and-down">add</i>
      Add
    </NavigationItem>
    <NavigationItem link="/login">Log in</NavigationItem>
    <NavigationItem link="/signup">Sign Up!</NavigationItem>
  </React.Fragment>
);

export default NavigatIonItems;
