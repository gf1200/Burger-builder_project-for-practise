import React, { Component } from "react";
import PropTypes from "prop-types";

class MealMenu extends Component {
  render() {
    let meal = null;

    switch (this.props.type) {
      case "breakfast":
        meal = <div>breakfast</div>;
        break;

      case "lunch":
        meal = <div>lunch</div>;
        break;

      case "supper":
        meal = <div>supper</div>;
        break;

      default:
        meal = null;

        return meal;
    }
  }
}

MealMenu.propTypes = {
  type: PropTypes.type.string.isRequirwd
};
export default MealMenu;
