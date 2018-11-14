import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import MealToChoose from './../../components/Menu/MealToChoose/MealToChoose';
import axios from '../../axios-meals';
import ModalCloseBTN from '../../components/UI/Modal/ModalCloseBTN';
import ModalFoter from '../../components/UI/Modal/ModalFoter';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import AddBTN from '../../components/UI/AddBTN/AddBTN';
import ChosenMeals from '../../components/Menu/ChosenMeals/ChosenMeals';
import TextInput from '../../components/UI/TextInput';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class NewPlanBuilder extends Component {
  state = {
    title: '',
    meals: null,
    totalMeals: 0,
    summaryDisabld: false,
    summaryOpened: false,
    loading: false,
    create: false,
    error: false
  };

  // onAddMeal(meal) {
  //   this.setState(state => {
  //     const numberGen = Math.floor(Math.random() * 1000);
  //     const addNewMeal = {
  //       ...meal,
  //       id: meal.id + `##${numberGen}`
  //     };
  //     const chosenMeals = [...state.chosenMeals, addNewMeal];
  //     return { chosenMeals };
  //   });
  // }

  // onDeleteMeal(id) {
  //   this.setState(state => {
  //     const chosenMeals = state.chosenMeals.filter(meal => meal.id !== id);
  //     return { chosenMeals };
  //   });
  // }

  onCreatePlan() {
    this.setState({ loading: true });
    const newPlan = {
      title: this.state.title,
      meals: this.props.chosenMeals
    };

    axios
      .post('plans.json', newPlan)
      .then(response => {
        this.setState({ loading: false, create: true });
        if (this.state.create) {
          setTimeout(() => {
            this.props.history.push('/plans');
          }, 2000);
        }
      })
      .catch(err => this.setState({ loading: false }));
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }
  componentDidMount() {
    this.setState({ loading: true });

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
        this.setState({ meals, loading: false });
      })
      .catch(error => this.setState({ error: true }));
  }

  summaryHandler = () => {
    this.setState({ summaryOpened: true });
  };

  summaryClose = () => {
    this.setState({ summaryOpened: false });
  };

  render() {
    const mealsAlreadyChosen = [...this.props.chosenMeals].map(meal =>
      meal.id.split('##').slice(0, 1)
    );

    let mealToChoose = null;
    let meals = this.state.error ? <p>Meals can't be loaded!</p> : <Spiner />;

    if (this.state.meals) {
      mealToChoose = (
        <MealToChoose
          alredyChosen={mealsAlreadyChosen}
          meals={this.state.meals}
          addMeal={this.props.onAddMeal}
        />
      );
      meals = (
        <React.Fragment>
          <br />
          <TextInput
            value={this.state.title}
            onChange={this.handleChangeTitle.bind(this)}
          />
          <ChosenMeals
            meals={this.props.chosenMeals}
            deleteMeal={this.props.onDeleteMeal}
            createClicked={this.onCreatePlan.bind(this)}
            createDisable={
              !this.props.chosenMeals.length || !this.state.title.length
                ? true
                : false
            }
          />
        </React.Fragment>
      );
    }

    if (this.state.loading || this.state.create) {
      meals = this.state.create ? (
        <div className="card-panel teal lighten-5 teal-text center-align">
          <p>The plan has been saved</p>
        </div>
      ) : (
        <Spiner />
      );
    }
    console.log(this.props.chosenMeals);

    return (
      <React.Fragment>
        {meals}
        <Modal
          modalType="bottom-sheet"
          modalId="modal1"
          whenClosed={this.summaryClose.bind(this)}
          isShow={true}
        >
          {mealToChoose}
          <ModalFoter>
            <ModalCloseBTN name="close" />
          </ModalFoter>
        </Modal>
        <AddBTN modalShow={this.summaryHandler} target="modal1" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    chosenMeals: state.chosenMeals
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddMeal: meal => dispatch({ type: actionTypes.ADD_MEAL, meal }),
    onDeleteMeal: id => dispatch({ type: actionTypes.REMOVE_MEAL, id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(NewPlanBuilder, axios));
