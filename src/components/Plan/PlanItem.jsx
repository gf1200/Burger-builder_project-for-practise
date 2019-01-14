import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlanItem = ({ plan, onSetCurrentPlan, currentPlanKey }) => {
	const isCurrentPlan = plan.key === currentPlanKey ? true : false;
	return (
		<>
			<div className='media is-mobile'>
				<div className='media-content'>
					<p className={`title is-4`}>
						<a href='#!'>{plan.title}</a>
					</p>
					<p className='subtitle is-6'>
						Ilość posiłków: <strong>{plan.meals.length}</strong>
					</p>
				</div>
				<div className='media-right'>
					<span
						class={`icon ${isCurrentPlan ? 'has-text-primary' : ''}`}
						onClick={() => onSetCurrentPlan()}
					>
						<FontAwesomeIcon icon='star' />
					</span>
				</div>
			</div>
			<div className='content is-small'>
				<br />
				<button className='button is-small'>Edytuj</button>
				<button className='button is-small'>Usuń</button>
			</div>
		</>
	);
};

export default PlanItem;
