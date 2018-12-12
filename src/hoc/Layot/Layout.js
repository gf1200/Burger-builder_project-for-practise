import React, { Component } from 'react';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideNave from '../../components/Navigation/SIdeNave/SideNave';
import ToolbarNav from '../../components/Navigation/ToolbarNav/ToolbarNav';
import NavigatIonItems from '../../components/Navigation/NavigationItems/NavigatIonItems';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/UI/Container/Container';
import { connect } from 'react-redux';

export class Layout extends Component {
  render() {
    const { children, isAuth } = this.props;
    return (
      <>
        <Toolbar>
          <ToolbarNav>
            <NavigatIonItems isAuth={isAuth} />
          </ToolbarNav>
          <SideNave>
            <NavigatIonItems isAuth={isAuth} />
          </SideNave>
        </Toolbar>
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};
export default connect(mapStateToProps)(Layout);
