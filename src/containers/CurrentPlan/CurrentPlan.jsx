import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentPlan extends Component {
  render() {
    console.log(this.props.plans);
    return <div>Current Plan ...{this.props.plans}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    plans: state.plans.list
  };
};

export default connect(mapStateToProps)(CurrentPlan);
