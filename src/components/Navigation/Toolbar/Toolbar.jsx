import React from 'react';

import Container from '../../UI/Container/Container';
import Brand from '../../Brand/Brand';

const toolbar = ({ children }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <Container>
      <Brand />
      {children}
    </Container>
  </nav>
);

export default toolbar;
