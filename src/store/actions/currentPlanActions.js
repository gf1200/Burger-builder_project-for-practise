import * as actions from './index';

import axios from '../../axios-meals';
import { userKey } from '../../auth';

export const loadCurrentPlanRequest = () => {
  return dispatch => {
    axios
      .get(`userObjects/currentPlan/${userKey}.json`)
      .then(response => {
        if (response.data !== null) {
          dispatch(actions.setCurrentPlan(response.data.planKey));
        }
      })
      .catch(error => console.log(error));
  };
};
