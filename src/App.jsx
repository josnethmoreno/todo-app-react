import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css'
import TaskCreator from '/src/components/TaskCreator.jsx'

function App() {

  const [taskItems, setTaskItems] = useState([])

  const createNewTask = (taskName) => {
    setTaskItems([...taskItems, {name: taskName, done: false}])
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) { setTaskItems(JSON.parse(data)) }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [ taskItems ])

  return (
    <div className="App">

      <TaskCreator createNewTask={createNewTask}/>

      {
        taskItems.map((task) => (
          <div key={uuid()}>
            {task.name}
          </div>
        ))
      }

    </div>
  )
}

export default App
