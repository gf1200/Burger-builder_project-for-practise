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
    this.props.loadCurentPlan();
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
          currentPlanKey={this.props.currentPlanKey}
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
    currentPlanKey: state.currentPlan.keyPlan,
    listOfPlans: state.plans.listOfPlans,
    plansError: state.plans.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPlans: () => dispatch(actions.getPlansData()),
    setCurrentPlan: planKey => dispatch(actions.setCurrentPlanRequest(planKey)),
    loadCurentPlan: () => dispatch(actions.loadCurrentPlanRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Plans, axios));
