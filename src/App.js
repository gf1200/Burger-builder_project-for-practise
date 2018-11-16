import React, { Component } from 'react';
import Layout from './hoc/Layot/Layout';
import { Route, Switch } from 'react-router-dom';
import NewPlanBuilder from './containers/NewPlanBuilder/NewPlanBuilder';
import CurrentPlan from './containers/CurrentPlan/CurrentPlan';
import Plans from './containers/Plans/Plans';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={CurrentPlan} />
          <Route path="/plans" component={Plans} />
          <Route path="/add" component={NewPlanBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
