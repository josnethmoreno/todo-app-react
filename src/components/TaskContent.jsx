import { v4 as uuid } from 'uuid';
import Task from '/src/components/Task.jsx'
import '/src/stylesheets/TaskContent.css'

export function TaskContent({ tasks, toggleTask, showCompleted }) {

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
     <h3>Task {name}</h3>
     {
      taskContentFilter(showCompleted)
     }
    </div>
  )
}