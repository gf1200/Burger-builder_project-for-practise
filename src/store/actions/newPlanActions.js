import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { userKey } from '../../auth';

export const initPlan = () => ({ type: actionTypes.INIT_PLAN });

export const addMeal = meal => {
  return { type: actionTypes.ADD_MEAL, meal };
};

export const removeMeal = index => ({ type: actionTypes.REMOVE_MEAL, index });

// SET NEW PLAN
const createNewPlanLoad = load => ({
  type: actionTypes.CREATE_NEW_PLAN_LOAD,
  load
});

const setNewPlanReceived = () => ({
  type: actionTypes.SET_NEW_PLAN_RECEIVED
});

const setNewPlanError = () => ({
  type: actionTypes.SET_NEW_PLAN_ERROR
});

export const setNewPlanData = (meals, title) => {
  return dispatch => {
    dispatch(createNewPlanLoad(true));
    const newPlan = {
      title,
      meals
    };
    axios
      .post(
        `https://meal-planer.firebaseio.com/userObjects/plans/${userKey}.json`,
        newPlan
      )
      .then(response => {
        if (response === undefined) {
          return dispatch(setNewPlanError());
        }
        dispatch(setNewPlanReceived());
      })
      .catch(error => {
        dispatch(setNewPlanError());
      });
  };
};
