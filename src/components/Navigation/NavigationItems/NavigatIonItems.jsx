import React from 'react';
import NavigationItem from './../NavigationItem/NavigationItem';
const NavigatIonItems = props => (
  <React.Fragment>
    <NavigationItem link="/current">Current</NavigationItem>
    <NavigationItem link="/">
      <i className="material-icons right hide-on-med-and-down">add</i>
      Add
    </NavigationItem>
  </React.Fragment>
);

export default NavigatIonItems;
