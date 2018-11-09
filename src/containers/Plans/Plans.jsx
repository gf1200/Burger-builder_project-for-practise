import React, { Component } from 'react';
import axios from './../../axios-meals';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import M from 'materialize-css';

export class Plans extends Component {
  elemsColap = null;
  instancesColap = null;
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
    this.elemsColap = document.querySelectorAll('.collapsible');
    this.instancesColap = M.Collapsible.init(this.elemsColap);
  }
  render() {
    let plans = this.state.error ? <p>Meals can't be loaded!</p> : <Spiner />;

    if (this.state.plans) {
      plans = this.state.plans.map(plan => (
        <li>
          <div className="collapsible-header">
            <i className="material-icons">more_vert</i>
            {plan.title}
          </div>
          <div className="collapsible-body">
            <span>
              {plan.meals.map(x => (
                <p>{x.name}</p>
              ))}
            </span>
          </div>
        </li>
      ));
    }
    return <ul className="collapsible">{plans}</ul>;
  }
}

export default withErrorHandler(Plans, axios);
