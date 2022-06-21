import { useState } from 'react'
import '/src/stylesheets/Modal.css';

function Modal({ showModal, closeModal, cleanTasks }) {
	const handleModal = (e) => {
		(e.target.className === 'Modal') && closeModal()
	}

	const handleModalYes = () => {
		cleanTasks()
		closeModal()
	}

	return(
		<div className="Modal" data-show={showModal} onClick={handleModal}>
			<div className="Modal-content">
				<div className="Modal-header">
		      <button className="Modal-close" onClick={closeModal}>
		      	<i className='bx bx-md bx-x'></i>
		      </button>
				</div>
				<div className="Modal-body">
					<h4 className="Modal-caption">Are you sure want deleted your completed tasks?</h4>
				</div>
				<div className="Modal-actions">
					<button className="Modal-button secondary" onClick={closeModal}>No</button>
					<button className="Modal-button primary" onClick={handleModalYes}>Yes</button>
				</div>
			</div>
		</div>
	);
}

export default Modal