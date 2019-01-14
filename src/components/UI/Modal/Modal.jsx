import React from 'react';

const Modal = props => {
	const { open, close, children } = props;

	if (!open) {
		return null;
	}

	return (
		<div className={`modal ${open ? 'is-active' : ''}`}>
			<div className='modal-background' onClick={close} />
			<div className='modal-content'>{children}</div>
			<button class='modal-close is-large' aria-label='close' onClick={close} />
		</div>
	);
};

export default Modal;
