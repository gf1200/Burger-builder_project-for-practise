import React from 'react';
import NavigationItem from './../NavigationItem/NavigationItem';
const NavigatIonItems = props => (
  <React.Fragment>
    <NavigationItem link="/">New plan</NavigationItem>
    <NavigationItem link="/current">Current</NavigationItem>
  </React.Fragment>
);

export default NavigatIonItems;
