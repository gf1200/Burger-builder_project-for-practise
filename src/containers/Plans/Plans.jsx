import React, { Component } from 'react';
import axios from './../../axios-meals';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import Collapsible from '../../components/UI/Collapsible/Collapsible';

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
  }
  render() {
    let plans = this.state.error ? <p>Meals can't be loaded!</p> : <Spiner />;

    if (this.state.plans) {
      plans = <Collapsible list={this.state.plans} />;
    }
    return <React.Fragment>{plans}</React.Fragment>;
  }
}

export default withErrorHandler(Plans, axios);
