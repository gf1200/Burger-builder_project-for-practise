import React from 'react';
import M from 'materialize-css';
import NavigatIonItems from '../NavigationItems/NavigatIonItems';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

const SideNave = () => (
  <ul className="sidenav" id="mobile-demo">
    <NavigatIonItems />
  </ul>
);

export default SideNave;
