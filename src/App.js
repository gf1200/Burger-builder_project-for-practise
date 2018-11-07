import React, { Component } from 'react';
import Layout from './hoc/Layot/Layout';
import { Route, Switch } from 'react-router-dom';
import NewPlanBuilder from './containers/NewPlanBuilder/NewPlanBuilder';
import { CurrentPlan } from './containers/CurrentPlan/CurrentPlan';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/current" component={CurrentPlan} />
          <Route path="/" exact component={NewPlanBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
