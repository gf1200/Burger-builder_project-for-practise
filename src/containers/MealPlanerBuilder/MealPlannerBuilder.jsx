import React, { Component } from "react";
import Aux from "./../../hoc/ReactAux";
import Menu from "../../components/Menu/Menu";

class MealPlannerBuilder extends Component {
  state = {
    meals: {
      breakfast: 1,
      lunch: 2,
      supper: 1
    }
  };

  render() {
    return (
      <Aux>
        <Menu meals={this.state.meals} />
        <div>Meal plan controler</div>
      </Aux>
    );
  }
}

export default MealPlannerBuilder;
