import { v4 as uuid } from 'uuid';
import Task from '/src/components/Task.jsx'
import '/src/stylesheets/TaskContent.css'

function TaskContent({ tasks, toggleTask }) {
  return (
    <div className="TaskContent">
    	{
        tasks.map((task) => (
          <Task task={task} toggleTask={toggleTask} key={uuid()}/>
        ))
      }
    </div>
  )
}

export default TaskContent
