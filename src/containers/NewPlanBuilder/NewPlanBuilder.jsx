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
import * as actions from '../../store/actions/index';
import InfoBox from '../../components/UI/InfoBox';

class NewPlanBuilder extends Component {
  state = {
    title: ''
  };

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  summaryHandler = () => {
    this.setState({ summaryOpened: true });
  };

  summaryClose = () => {
    this.setState({ summaryOpened: false });
  };

  componentDidMount() {
    this.props.loadMeals();
  }

  render() {
    const mealsAlreadyChosen = [...this.props.chosenMeals].map(meal =>
      meal.id.split('##').slice(0, 1)
    );

    if (this.props.create || this.props.createError) {
      setTimeout(() => {
        this.props.initPlan();
        return this.props.history.push('/plans');
      }, 1600);
    }

    let mealToChoose = null;
    let meals = this.props.mealsError ? (
      <InfoBox color="red">
        <p>Meals can't be loaded!</p>
      </InfoBox>
    ) : (
      <Spiner />
    );

    if (this.props.meals) {
      mealToChoose = (
        <MealToChoose
          alredyChosen={mealsAlreadyChosen}
          meals={this.props.meals}
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
            createClicked={() =>
              this.props.createNewPlan(this.props.chosenMeals, this.state.title)
            }
            createDisable={
              !this.props.chosenMeals.length || !this.state.title.length
                ? true
                : false
            }
          />
        </React.Fragment>
      );
    }

    if (this.props.loading || this.props.create) {
      meals = this.props.create ? (
        <InfoBox color="teal">
          <p>The plan has been saved in plans ...</p>
        </InfoBox>
      ) : (
        <Spiner />
      );
    }

    if (this.props.createError) {
      meals = (
        <InfoBox color="red">
          <p>The plan has't been saved ...</p>
        </InfoBox>
      );
    }

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
    chosenMeals: state.newPlan.chosenMeals,
    create: state.newPlan.planCreated,
    loading: state.newPlan.loading,
    createError: state.newPlan.error,
    fetchError: state.meals.error,
    meals: state.meals.mealsList,
    mealsError: state.meals.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    initPlan: () => dispatch(actions.initPlan()),
    createNewPlan: (meals, title) =>
      dispatch(actions.createNewPlanInit(meals, title)),
    loadMeals: () => dispatch(actions.initMeals()),
    onAddMeal: meal => dispatch(actions.addMeal(meal)),
    onDeleteMeal: id => dispatch(actions.removeMeal(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(NewPlanBuilder, axios));
