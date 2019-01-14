import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Container from '../../components/UI/Container/Container';
import { Link } from 'react-router-dom';

class CurrentPlan extends Component {
	componentDidMount() {
		const { userId, token } = this.props;
		if (!this.props.plans && !this.props.isCurrentPlanKey) {
			this.props.loadPlans(userId, token);
			this.props.loadCurentPlan(userId, token);
		}
	}
	render() {
		const { isCurrentPlanKey, plans } = this.props;

		let displayPlan;

		const title = (
			<div className='level is-mobile'>
				<div className='level-left'>
					<h1 className='title'>Plan na teraz</h1>
				</div>
				<div className='level-right'>
					<div className='level-item'>
						<Link className='button is-primary is-outlined' to='/plans'>
							zmień plan
						</Link>
					</div>
				</div>
			</div>
		);

		if (!isCurrentPlanKey)
			displayPlan = (
				<div className='notification is-info'>
					<p>Nie wybrałeś jeszcze żadnego planu</p>
				</div>
			);

		if (isCurrentPlanKey && plans) {
			let [currentPlan] = plans.filter(plan => plan.key === isCurrentPlanKey);
			let mealsList = currentPlan.meals.map((meal, index) => (
				<div className='media' key={index}>
					<div className='media-content'>{meal.name}</div>
				</div>
			));

			displayPlan = (
				<div className='box'>
					<h1 className='title is-4'>{currentPlan.title}</h1>
					{mealsList}
				</div>
			);
		}
		return (
			<section className='section'>
				<Container>
					{title}
					{displayPlan}
				</Container>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		isCurrentPlanKey: state.currentPlan.keyPlan,
		plans: state.plans.listOfPlans,
		token: state.auth.token,
		userId: state.auth.userId
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loadPlans: (userId, token) => dispatch(actions.getPlansData(userId, token)),
		loadCurentPlan: (userId, token) => dispatch(actions.loadCurrentPlanRequestInit(userId, token))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrentPlan);
