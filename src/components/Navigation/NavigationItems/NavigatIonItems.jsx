import React from 'react';
import NavigationItem from './../NavigationItem/NavigationItem';
const NavigatIonItems = props => (
  <React.Fragment>
    <NavigationItem link="/" active={true}>
      New plan
    </NavigationItem>
    <NavigationItem link="/" active={false}>
      Current
    </NavigationItem>
  </React.Fragment>
);

export default NavigatIonItems;
