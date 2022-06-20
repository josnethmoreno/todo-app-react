import '/src/stylesheets/Task.css'

function Task({ task, toggleTask }) {
  return (
    <div className="Task">
      <label className="Task-label">
      	<span className="Task-name">{task.name}</span>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </label>
    </div>
  )
}

export default Task
