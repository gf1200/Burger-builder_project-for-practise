import React, { Component } from 'react';
import M from 'materialize-css';
import CollapsibleItem from './CollapsibleItem/CollapsibleItem';

export class Collapsible extends Component {
  elemsColap = null;
  instancesColap = null;
  componentDidMount() {
    this.elemsColap = document.querySelectorAll('.collapsible');
    this.instancesColap = M.Collapsible.init(this.elemsColap);
  }

  render() {
    const listOfPlans = this.props.listOfPlans.map(plan => (
      <CollapsibleItem
        key={plan.key}
        plan={plan}
        currentPlanKey={this.props.currentPlanKey}
        onCurrentSet={() => this.props.onCurrentSet(plan.key, this.props.userId, this.props.token)}
      />
    ));

    return <ul className="collapsible">{listOfPlans}</ul>;
  }
}

export default Collapsible;
