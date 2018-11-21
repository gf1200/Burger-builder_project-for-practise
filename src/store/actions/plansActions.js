import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { userKey } from '../../auth';

import { flattenFireBaseObject } from './utility';

// // SET CURRENT PLAN
// const setCurrentPlan = currentId => ({
//   type: actionTypes.SET_CURRENT_PLAN,
//   currentId
// });

export const putCurrentPlan = (currentPlan, plans) => {
  return dispatch => {
    const transformPlansToIdObj = {};

    plans.reduce((acc, next) => {
      acc[next.id] = { ...next, current: false };

      return acc;
    }, transformPlansToIdObj);

    const updatePlans = {
      ...transformPlansToIdObj,
      [currentPlan.id]: {
        ...currentPlan,
        current: true
      }
    };

    axios
      .put('plans.json', updatePlans)
      .then(response => {
        dispatch(initPlans());
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

        console.log(listOfPlans);
        dispatch(setPlans(listOfPlans));
      })
      .catch(error => dispatch(fetchPlansFaild()));
  };
};
