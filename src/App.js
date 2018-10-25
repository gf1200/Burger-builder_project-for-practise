import React, { Component } from 'react';
import Layout from './hoc/Layot/Layout';
import MealPlannerBuilder from './containers/MealPlanerBuilder/MealPlannerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <MealPlannerBuilder />
      </Layout>
    );
  }
}

export default App;
