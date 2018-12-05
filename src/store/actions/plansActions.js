import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { userKey } from '../../auth';
import { flattenFireBaseObject } from './utility';

// SET CURRENT PLAN
export const setCurrentPlanReceived = planKey => ({
  type: actionTypes.SET_CURRENT_PLAN_RECEVIED,
  planKey
});
export const setCurrentPlanData = planKey => {
  return dispatch => {
    axios
      .put(
        `https://meal-planer.firebaseio.com/userObjects/currentPlan/${userKey}.json`,
        { planKey }
      )
      .then(response => {
        dispatch(setCurrentPlanReceived(planKey));
      })
      .catch();
  };
};

// GET PLANS
const getPlansReceived = listOfPlans => ({
  type: actionTypes.GET_PLANS_RECEIVED,
  listOfPlans
});
export const getPlansError = () => ({ type: actionTypes.GET_PLANS_ERROR });
export const getPlansData = () => {
  return dispatch => {
    axios
      .get(
        `https://meal-planer.firebaseio.com/userObjects/plans/${userKey}.json`
      )
      .then(res => {
        const listOfPlans = flattenFireBaseObject(res.data).map(plan => ({
          ...plan,
          meals: flattenFireBaseObject(plan.meals)
        }));
        dispatch(getPlansReceived(listOfPlans));
      })
      .catch(error => dispatch(getPlansError()));
  };
};
