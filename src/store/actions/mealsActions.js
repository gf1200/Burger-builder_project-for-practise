import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { flattenFireBaseObject } from './utility';

const getMealsReceived = meals => {
  return { type: actionTypes.GET_MEALS_RECEIVED, meals };
};

const getMealsError = () => {
  return { type: actionTypes.GET_MEALS_ERROR };
};
export const getMealsData = (userId, token) => {
  return dispatch => {
    let url = `userObjects/meals/${userId}.json?auth=${token}`;
    axios
      .get(url)
      .then(res => {
        const meals = flattenFireBaseObject(res.data);
        dispatch(getMealsReceived(meals));
      })
      .catch(error => dispatch(getMealsError()));
  };
};
