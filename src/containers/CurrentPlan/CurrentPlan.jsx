import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class CurrentPlan extends Component {
  componentDidMount() {
    const { userId, token } = this.props;
    if (!this.props.plans && !this.props.isCurrentPlanKey) {
      this.props.loadPlans(userId, token);
      this.props.loadCurentPlan(userId, token);
    }
  }
  render() {
    let displayPlan = (
      <ul className="collection">
        <li>
          <div className=" collapsible-header">
            <i className="material-icons ">info_outline</i>
            You have not chosen any plan
          </div>
        </li>
      </ul>
    );

    if (this.props.isCurrentPlanKey && this.props.plans) {
      let [currentPlan] = this.props.plans.filter(plan => plan.key === this.props.isCurrentPlanKey);
      let mealsList = currentPlan.meals.map((meal, index) => (
        <li className="collection-item" key={index}>
          <div>{meal.name}</div>
        </li>
      ));
      displayPlan = (
        <div>
          <h1>{currentPlan.title}</h1>
          <ul className="collection">{mealsList}</ul>
        </div>
      );
    }
    return displayPlan;
  }
}

const mapStateToProps = state => {
  return {
    isCurrentPlanKey: state.currentPlan.keyPlan,
    plans: state.plans.listOfPlans,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPlans: (userId, token) => dispatch(actions.getPlansData(userId, token)),
    loadCurentPlan: (userId, token) => dispatch(actions.loadCurrentPlanRequestInit(userId, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPlan);
