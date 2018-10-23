import React from 'react';
import NavigationItem from './../NavigationItem/NavigationItem';
const navigatIonItems = props => (
  <ul id="nav-mobile" className="left hide-on-med-and-down">
    <NavigationItem link="/" active={true}>
      New plan
    </NavigationItem>
    <NavigationItem link="/" active={false}>
      Checkout
    </NavigationItem>
  </ul>
);

export default navigatIonItems;
