import '/src/stylesheets/VisibilityControl.css'

function VisibilityControl({ setShowChompletedContent, value, cleanTask }) {

	const handleDelete = () => {
		if(window.confirm('Are you sure want deleted your completed tasks?')){
			cleanTask()
		}
	}

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
      <button className="VisibilityControl-button" onClick={handleDelete}><i className='bx bx-md bx-trash'></i></button>
    </div>
	);
}

export default VisibilityControl