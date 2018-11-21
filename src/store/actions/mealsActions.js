import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { userKey } from '../../auth';
import { flattenFireBaseObject } from './utility';

export const setMeals = meals => {
  return { type: actionTypes.SET_MEALS, meals };
};

export const fetchMealsFaild = () => {
  return { type: actionTypes.FETCH_MEALS_FAILD };
};
export const initMeals = () => {
  return dispatch => {
    axios
      .get(`userObjects/meals/${userKey}.json`)
      .then(res => {
        const meals = flattenFireBaseObject(res.data);
        dispatch(setMeals(meals));
      })
      .catch(error => dispatch(fetchMealsFaild()));
  };
};
