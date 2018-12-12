import * as actionTypes from './actionTypes';

import axios from '../../axios-meals';

// LOAD CURRENT PLAN
export const loadCurrentPlanRequestInit = (userId, token) => {
  return dispatch => {
    let url = `https://meal-planer.firebaseio.com/userObjects/currentPlan/${userId}.json?auth=${token}`;
    axios
      .get(url)
      .then(response => {
        if (response.data !== null) {
          dispatch(setCurrentPlanSucces(response.data.planKey));
        }
      })
      .catch(error => console.log(error));
  };
};

// SET CURRENT PLAN
const setCurrentPlanSucces = planKey => ({
  type: actionTypes.SET_CURRENT_PLAN_SUCCES,
  planKey
});

const setCurrentPlanFailure = error => ({ type: actionTypes.SET_CURRENT_PLAN_FAILURE, error });

export const setCurrentPlanRequestInit = (planKey, userId, token) => {
  return dispatch => {
    let url = `https://meal-planer.firebaseio.com/userObjects/currentPlan/${userId}.json?auth=${token}`;
    axios
      .put(url, { planKey })
      .then(response => {
        if (response.data !== null) {
          dispatch(setCurrentPlanSucces(planKey));
        }
      })
      .catch(error => dispatch(setCurrentPlanFailure(error)));
  };
};
