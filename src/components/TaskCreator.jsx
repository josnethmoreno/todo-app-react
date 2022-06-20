import { useState } from 'react'
import '/src/stylesheets/TaskCreator.css'

function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    setNewTaskName('')
    createNewTask(newTaskName)
  }

  return (
    <form onSubmit={handleSubmit} className="TaskCreator">
      <input
        className="TaskCreator-input"
        type="text" 
        placeholder="Enter a new task!" 
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)} 
      />
      <button className="TaskCreator-button">+</button>
    </form>
  )
}

export default TaskCreator
