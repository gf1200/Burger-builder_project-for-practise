import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { userKey } from '../../auth';
import { flattenFireBaseObject } from './utility';

const getMealsReceived = meals => {
  return { type: actionTypes.GET_MEALS_RECEIVED, meals };
};

const getMealsError = () => {
  return { type: actionTypes.GET_MEALS_ERROR };
};
export const getMealsData = () => {
  return dispatch => {
    axios
      .get(`userObjects/meals/${userKey}.json`)
      .then(res => {
        const meals = flattenFireBaseObject(res.data);
        dispatch(getMealsReceived(meals));
      })
      .catch(error => dispatch(getMealsError()));
  };
};
