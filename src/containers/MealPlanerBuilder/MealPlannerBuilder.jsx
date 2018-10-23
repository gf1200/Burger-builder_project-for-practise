import React, { Component } from "react";
import Aux from "./../../hoc/ReactAux";
import Menu from "../../components/Menu/Menu";
import BuildControls from "../../components/Menu/BuildControls/BuildControls";

class MealPlannerBuilder extends Component {
  state = {
    meals: {
      breakfast: 0,
      lunch: 0,
      supper: 0
    },
    totalMeals: 0,
    confirmeDisabld: false
  };
  updateConfirmBtn = meals => {
    const sum = Object.keys(meals)
      .map(mealKey => {
        return meals[mealKey];
      })
      .reduce((sum, next) => {
        return sum + next;
      }, 0);

    this.setState({ confirmeDisabld: sum > 0 });
  };

  addMealHandler = type => {
    const updateCount = this.state.meals[type] + 1;
    const updateMeals = {
      ...this.state.meals
    };
    updateMeals[type] = updateCount;
    const amountAddition = this.state.totalMeals + 1;
    this.setState({ totalMeals: amountAddition, meals: updateMeals });
    this.updateConfirmBtn(updateMeals);
  };

  removeMealHandler = type => {
    const oldCount = this.state.meals[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateMeals = {
      ...this.state.meals
    };
    updateMeals[type] = updateCount;
    const amountDeduction = this.state.totalMeals - 1;
    this.setState({ totalMeals: amountDeduction, meals: updateMeals });
    this.updateConfirmBtn(updateMeals);
  };

  render() {
    const disableInfo = {
      ...this.state.meals
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Aux>
        <Menu meals={this.state.meals} totalMeals={this.state.totalMeals} />
        <BuildControls
          mealeAdded={this.addMealHandler}
          mealRemoved={this.removeMealHandler}
          disabld={disableInfo}
          confirmDisabld={this.state.confirmeDisabld}
        />
      </Aux>
    );
  }
}

export default MealPlannerBuilder;

// const oldCount = this.state.meals[type];
// const updateCount = oldCount + 1;
// const updateMeals = {
//   ...this.state.meals
// };
// updateMeals[type] = updateCount;
// const amountAddition = this.state.totalMeals + 1;
// this.setState({ totalMeals: amountAddition, meals: updateMeals });
