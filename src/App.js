import React, { Component } from 'react';
import Layout from './hoc/Layot/Layout';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NewPlanBuilder from './containers/NewPlanBuilder/NewPlanBuilder';
import CurrentPlan from './containers/CurrentPlan/CurrentPlan';
import Plans from './containers/Plans/Plans';
import Auth from './containers/Auth/Auth';
import Home from './components/Pages/Home';
import Logout from './containers/Auth/Logout/Logout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboardList, faStar, faListUl, faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faClipboardList, faStar, faListUl, faPlus);

class App extends Component {
  render() {
    const { isAuth } = this.props;
    const homeComponent = isAuth ? CurrentPlan : Home;
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={homeComponent} />
          <Route path="/plans" component={Plans} />
          <Route path="/add" component={NewPlanBuilder} />
          <Route path="/signup" render={() => <Auth method="signup" />} />
          <Route path="/login" render={() => <Auth method="login" />} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

export default withRouter(connect(mapStateToProps)(App));
