import * as actionTypes from './actionTypes';

import axios from '../../axios-meals';
import { userKey } from '../../auth';

// LOAD CURRENT PLAN
export const loadCurrentPlanRequest = () => {
  return dispatch => {
    axios
      .get(`userObjects/currentPlan/${userKey}.json`)
      .then(response => {
        if (response.data !== null) {
          dispatch(setCurrentPlanSucces(response.data.planKey));
        }
      })
      .catch(error => console.log(error));
  };
};

// SET CURRENT PLAN
export const setCurrentPlanSucces = planKey => ({
  type: actionTypes.SET_CURRENT_PLAN_SUCCES,
  planKey
});

export const setCurrentPlanRequest = planKey => {
  return dispatch => {
    axios
      .put(`https://meal-planer.firebaseio.com/userObjects/currentPlan/${userKey}.json`, { planKey })
      .then(response => {
        dispatch(setCurrentPlanSucces(planKey));
      })
      .catch();
  };
};
