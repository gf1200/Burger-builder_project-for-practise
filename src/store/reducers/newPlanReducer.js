import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  chosenMeals: [],
  loading: false,
  planCreated: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PLAN:
      return updateObject(state, {
        chosenMeals: [],
        loading: false,
        planCreated: false,
        error: false
      });

    case actionTypes.CREATE_NEW_PLAN_SUCCESS:
      return updateObject(state, { planCreated: true, loading: false });

    case actionTypes.CREATE_NEW_PLAN_FAILD:
      return updateObject(state, { error: true, loading: false });

    case actionTypes.ADD_MEAL:
      return updateObject(state, {
        chosenMeals: [...state.chosenMeals, action.newMeal]
      });

    case actionTypes.REMOVE_MEAL:
      const chosenMeals = state.chosenMeals.filter(
        meal => meal.id !== action.id
      );
      return updateObject(state, { chosenMeals });

    case actionTypes.CREATE_NEW_PLAN_LOAD:
      return updateObject(state, { loading: action.load });

    default:
      return state;
  }
};

export default reducer;
