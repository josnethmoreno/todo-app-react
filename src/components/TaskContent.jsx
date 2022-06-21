import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import Task from '/src/components/Task.jsx'
import '/src/stylesheets/TaskContent.css'

export function TaskContent({ name, tasks, toggleTask, showCompleted }) {

  const [taskContentEmpty, setTaskContentEmpty] = useState(true);

  const handleTaskContentEmpty = () => {
    if (!(tasks.find((task) => task.done === false))) {
      setTaskContentEmpty(true)
      return
    }
    setTaskContentEmpty(false)
  }

  useEffect(() => {
    handleTaskContentEmpty()
  }, [tasks])

  const taskMessage = () => {
    return(
      <div className="TaskContent-message">
        <i className='bx bxs-tired bx-md'></i>
        <h4>Aún no has añadido tareas nueva</h4>
      </div>
    )
  }

  const taskContentFilter = (doneValue) => {
    return(
      tasks
      .filter(task => task.done === doneValue)
      .map((task) => (
        <Task task={task} toggleTask={toggleTask} key={uuid()}/>
      ))
    )
  }

  return (
    <div className="TaskContent">
     <h3 className="TaskContent-title">Task {name}</h3>
     <div className="TaskContent-tasks">
      {
        taskContentFilter(showCompleted)
      }
      {
        (!showCompleted) && (taskContentEmpty) && taskMessage()
      }
     </div>
    </div>
  )
}