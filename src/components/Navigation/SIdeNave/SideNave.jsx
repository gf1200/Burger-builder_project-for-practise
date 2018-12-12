import React from 'react';
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

const SideNave = ({ children }) => (
  <ul className="sidenav" id="mobile-demo">
    {children}
  </ul>
);

export default SideNave;
