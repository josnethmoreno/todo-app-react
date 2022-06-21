import '/src/stylesheets/VisibilityControl.css'

function VisibilityControl({ setShowChompletedContent, value, openModal }) {

	return(
		<div className="VisibilityControl">
			<div>
	      <label>
		      Show completed tasks
		      <input 
			      type="checkbox" 
			      onChange={e => setShowChompletedContent((prev) => !prev)}
			      checked={value}
			      id="checked"
		      />
	      </label>
			</div>
      <button className="VisibilityControl-button" onClick={openModal}>
	      <i className='bx bx-md bx-trash'></i>
      </button>
    </div>
	);
}

export default VisibilityControl