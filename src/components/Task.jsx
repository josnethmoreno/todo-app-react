import '/src/stylesheets/Task.css'

function Task({ task, toggleTask }) {
  return (
    <div className="Task">
    	<span className="Task-name">{task.name}</span>
      <input 
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task)}
      />
    </div>
  )
}

export default Task
