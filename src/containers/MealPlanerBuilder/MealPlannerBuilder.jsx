import React, { Component } from 'react';
import Aux from './../../hoc/ReactAux/ReactAux';
import Menu from '../../components/Menu/Menu';
import BuildControls from '../../components/Menu/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import MealSummery from './../../components/Menu/MealSummery/MealSummery';

import axios from '../../axios-orders';

class MealPlannerBuilder extends Component {
  state = {
    meals: {
      breakfast: 0,
      lunch: 0,
      supper: 0
    },
    totalMeals: 0,
    summaryDisabld: false,
    summaryOpened: false
  };

  confirmMealPlan = () => {
    const plan = {
      meals: this.state.meals,
      customer: {
        name: 'John Don',
        adress: {
          street: 'Krakowska 1',
          zipCode: '30-000',
          cuntry: 'Polska'
        },
        email: 'john_d@gmail.com'
      },
      delivery: 'fastest'
    };

    axios
      .post('orders.json', plan)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  summaryHandler = () => {
    this.setState({ summaryOpened: true });
  };

  summaryClose = () => {
    this.setState({ summaryOpened: false });
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
        <Modal
          modalId="modal1"
          show={this.state.summaryOpened}
          close={this.summaryClose}
          confirm={this.confirmMealPlan}
        >
          <MealSummery meals={this.state.meals} />
        </Modal>

        <Menu meals={this.state.meals} totalMeals={this.state.totalMeals} />
        <BuildControls
          mealeAdded={this.addMealHandler}
          mealRemoved={this.removeMealHandler}
          disabld={disableInfo}
          confirmDisabld={this.state.confirmeDisabld}
          target="modal1"
          modalShow={this.summaryHandler}
        />
      </Aux>
    );
  }
}

export default MealPlannerBuilder;
