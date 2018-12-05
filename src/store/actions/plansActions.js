import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { userKey } from '../../auth';

import { flattenFireBaseObject } from './utility';

// SET CURRENT PLAN
export const setCurrentPlan = planKey => ({
  type: actionTypes.SET_CURRENT_PLAN,
  planKey
});
export const initSetCurrentPlan = planKey => {
  return dispatch => {
    axios
      .put(
        `https://meal-planer.firebaseio.com/userObjects/currentPlan/${userKey}.json`,
        { planKey }
      )
      .then(response => {
        dispatch(setCurrentPlan(planKey));
      })
      .catch();
  };
};

// FETCH PLANS
const setPlans = listOfPlans => ({
  type: actionTypes.SET_PLANS,
  listOfPlans
});
export const fetchPlansFaild = () => ({ type: actionTypes.FETCH_PLANS_FAILD });
export const initPlans = () => {
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
        dispatch(setPlans(listOfPlans));
      })
      .catch(error => dispatch(fetchPlansFaild()));
  };
};
