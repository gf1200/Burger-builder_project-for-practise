import React from 'react';

const CartItem = ({ children }) => {
	return (
		<div className='column is-6-tablet is-4-desktop'>
			<div className='box'>{children}</div>
		</div>
	);
};

export default CartItem;
