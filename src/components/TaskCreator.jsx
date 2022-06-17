import { useState } from 'react'
import '/src/stylesheets/TaskCreator.css'

function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('Task', newTaskName)
    setNewTaskName('')
    createNewTask(newTaskName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter a new task!" 
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)} 
      />
      <button>Add</button>
    </form>
  )
}

export default TaskCreator
