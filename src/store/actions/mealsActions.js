import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';

export const setMeals = meals => {
  return { type: actionTypes.SET_MEALS, meals };
};

export const fetchMealsFaild = () => {
  return { type: actionTypes.FETCH_MEALS_FAILD };
};
export const initMeals = () => {
  return dispatch => {
    axios
      .get('meals-2.json')
      .then(res => {
        const meals = [];
        for (let key in res.data) {
          meals.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(setMeals(meals));
      })
      .catch(error => dispatch(fetchMealsFaild()));
  };
};
