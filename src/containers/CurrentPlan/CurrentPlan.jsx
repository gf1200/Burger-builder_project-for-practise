import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentPlan extends Component {
  render() {
    console.log(this.props.plans);
    return <div>Current Plan ...</div>;
  }
}

const mapStateToProps = state => {
  return {
    plans: state.plans.listOfPlans
  };
};

export default connect(mapStateToProps)(CurrentPlan);
