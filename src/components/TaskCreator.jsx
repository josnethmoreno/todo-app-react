import { useState } from 'react'
import '/src/stylesheets/TaskCreator.css'

function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newTaskName.trim()) { 
      e.target[0].classList.add('error')
      e.target[0].placeholder = `You can enter a name`;
      return
    }
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  const handleInput = (e) => {
    e.target.classList.remove('error')
    e.target.placeholder = `Enter a new task!`;
    setNewTaskName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="TaskCreator">
      <input
        className="TaskCreator-input"
        type="text" 
        placeholder="Enter a new task!" 
        value={newTaskName}
        onChange={handleInput}
      />
      <button className="TaskCreator-button">+</button>
    </form>
  )
}

export default TaskCreator
