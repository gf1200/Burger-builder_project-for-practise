import React from 'react';
import M from 'materialize-css';
import NavigationItem from '../NavigationItem/NavigationItem';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

const SideNave = () => (
  <ul className="sidenav" id="mobile-demo">
    <NavigationItem link="/" active={true}>
      New plan
    </NavigationItem>
    <NavigationItem link="/" active={false}>
      Checkout
    </NavigationItem>
  </ul>
);

export default SideNave;
