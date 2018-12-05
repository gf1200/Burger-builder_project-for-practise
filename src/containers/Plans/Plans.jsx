import React, { Component } from 'react';
import axios from './../../axios-meals';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import Collapsible from '../../components/UI/Collapsible/Collapsible';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import InfoBox from '../../components/UI/InfoBox';

export class Plans extends Component {
  componentDidMount() {
    this.props.loadPlans();
  }
  render() {
    let plans = this.props.plansError ? (
      <InfoBox color="red">
        <p>Plans can't be loaded!</p>
      </InfoBox>
    ) : (
      <Spiner />
    );
    if (this.props.listOfPlans) {
      plans = (
        <Collapsible
          onCurrentSet={this.props.setCurrentPlan}
          listOfPlans={this.props.listOfPlans}
        />
      );
    }
    return <React.Fragment>{plans}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    listOfPlans: state.plans.listOfPlans,
    plansError: state.plans.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPlans: () => dispatch(actions.getPlansData()),
    setCurrentPlan: planKey => dispatch(actions.setCurrentPlanData(planKey))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Plans, axios));
