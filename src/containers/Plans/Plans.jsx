import React, { Component } from 'react';
import axios from './../../axios-meals';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

export class Plans extends Component {
  state = {
    landing: false,
    error: false,
    plans: null
  };
  componentDidMount() {
    this.setState({ landing: true });
    axios
      .get('plans.json')
      .then(res => {
        const plans = [];
        for (let key in res.data) {
          plans.push({
            ...res.data[key],
            id: key
          });
        }

        this.setState({ plans, landing: false });
      })
      .catch(error => this.setState({ error: true }));

    this.setState({ landing: false });
  }
  render() {
    let plans = this.state.error ? <p>Meals can't be loaded!</p> : <Spiner />;

    if (this.state.plans) {
      plans = this.state.plans.map(plan => <p>{plan.title}</p>);
    }
    return <div>{plans}</div>;
  }
}

export default withErrorHandler(Plans, axios);
