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
    const { userId, token } = this.props;
    this.props.loadPlans(userId, token);
    this.props.loadCurentPlan(userId, token);
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
          userId={this.props.userId}
          token={this.props.token}
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
    plansError: state.plans.error,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPlans: (userId, token) => dispatch(actions.getPlansData(userId, token)),
    setCurrentPlan: (planKey, userId, token) => dispatch(actions.setCurrentPlanRequestInit(planKey, userId, token)),
    loadCurentPlan: (userId, token) => dispatch(actions.loadCurrentPlanRequestInit(userId, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Plans, axios));
