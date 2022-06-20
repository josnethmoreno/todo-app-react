import '/src/stylesheets/VisibilityControl.css'

function VisibilityControl({ setShowChompletedContent, value, cleanTask }) {

	const handleDelete = () => {
		if(window.confirm('Are you sure want deleted your completed tasks?')){
			cleanTask()
		}
	}

	return(
		<div>
      <input 
	      type="checkbox" 
	      onChange={e => setShowChompletedContent((prev) => !prev)}
	      checked={value}
      />
      <label>Show tasks done</label>
      <button onClick={handleDelete}>Delete</button>
    </div>
	);
}

export default VisibilityControl