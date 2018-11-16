import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { fireBaseTransformId } from './utility';

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
      .get('plans.json')
      .then(res => {
        const listOfPlans = fireBaseTransformId(res);
        dispatch(setPlans(listOfPlans));
      })
      .catch(error => dispatch(fetchPlansFaild()));
  };
};
