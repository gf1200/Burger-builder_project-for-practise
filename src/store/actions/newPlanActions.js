import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';

export const initPlan = () => ({ type: actionTypes.INIT_PLAN });

export const addMeal = meal => {
  const numberGen = Math.floor(Math.random() * 1000);
  const newMeal = {
    ...meal,
    id: meal.id + `##${numberGen}`
  };

  return { type: actionTypes.ADD_MEAL, newMeal };
};

export const removeMeal = id => ({ type: actionTypes.REMOVE_MEAL, id });

export const createNewPlanLoad = load => ({
  type: actionTypes.CREATE_NEW_PLAN_LOAD,
  load
});

export const createNewPlanFaild = () => ({
  type: actionTypes.CREATE_NEW_PLAN_FAILD
});

export const createNewPlanInit = (meals, title) => {
  return dispatch => {
    dispatch(createNewPlanLoad(true));
    const newPlan = {
      title,
      meals
    };
    axios
      .post('plans.json', newPlan)
      .then(response => {
        if (response === undefined) {
          return dispatch(createNewPlanFaild());
        }
        dispatch(createNewPlanSuccess());
      })
      .catch(error => {
        dispatch(createNewPlanFaild());
      });
  };
};

export const createNewPlanSuccess = () => ({
  type: actionTypes.CREATE_NEW_PLAN_SUCCESS
});
