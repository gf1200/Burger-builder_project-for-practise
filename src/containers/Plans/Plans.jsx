import React, { Component } from 'react';
import axios from './../../axios-meals';
import Spiner from './../../components/UI/Spiner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import CartsList from '../../components/CartsList/CartsList';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Container from '../../components/UI/Container/Container';
import CartItem from '../../components/CartsList/CartItem/CartItem';
import PlanItem from '../../components/Plan/PlanItem';

export class Plans extends Component {
	state = {};

	componentDidMount() {
		const { userId, token } = this.props;
		this.props.loadPlans(userId, token);
		this.props.loadCurentPlan(userId, token);
	}
	render() {
		const { plansError, listOfPlans, currentPlanKey, setCurrentPlan, userId, token } = this.props;
		let plans;

		plans =
			plansError && !listOfPlans ? (
				<div className='notification is-warning'>
					<p>Plany nie mogą zostać wczytane</p>
				</div>
			) : (
				<Spiner />
			);

		if (listOfPlans) {
			plans = (
				<CartsList>
					{listOfPlans.map(plan => (
						<CartItem>
							<PlanItem
								plan={plan}
								currentPlanKey={currentPlanKey}
								onSetCurrentPlan={() =>
									setCurrentPlan(plan.key, userId, token)
								}
							/>
						</CartItem>
					))}
				</CartsList>
			);
		}
		return (
			<section className='section'>
				<Container>
					<h1 className='title'>Zapisane plany żywieniowe</h1>
					{plans}
				</Container>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentPlanKey: state.currentPlan.keyPlan,
		listOfPlans: state.plans.listOfPlans,
		plansError: state.plans.error,
		token: state.auth.token,
		userId: state.auth.userId
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loadPlans: (userId, token) => dispatch(actions.getPlansData(userId, token)),
		setCurrentPlan: (planKey, userId, token) =>
			dispatch(actions.setCurrentPlanRequestInit(planKey, userId, token)),
		loadCurentPlan: (userId, token) => dispatch(actions.loadCurrentPlanRequestInit(userId, token))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(Plans, axios));
