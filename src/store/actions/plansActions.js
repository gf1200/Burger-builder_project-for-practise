import * as actionTypes from './actionTypes';
import axios from '../../axios-meals';
import { flattenFireBaseObject } from './utility';

// GET PLANS
const getPlansReceived = listOfPlans => ({
  type: actionTypes.GET_PLANS_RECEIVED,
  listOfPlans
});
export const getPlansError = () => ({ type: actionTypes.GET_PLANS_ERROR });
export const getPlansData = (userId, token) => {
  return dispatch => {
    let url = `https://meal-planer.firebaseio.com/userObjects/plans/${userId}.json?auth=${token}`;
    axios
      .get(url)
      .then(res => {
        const listOfPlans = flattenFireBaseObject(res.data).map(plan => ({
          ...plan,
          meals: flattenFireBaseObject(plan.meals)
        }));
        dispatch(getPlansReceived(listOfPlans));
      })
      .catch(error => dispatch(getPlansError()));
  };
};
