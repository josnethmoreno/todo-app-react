import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css'
import TaskCreator from '/src/components/TaskCreator.jsx'

function App() {

  const [taskItems, setTaskItems] = useState([
    {name: 'Mi first task', done: false},
    {name: 'Mi two task', done: false},
    {name: 'Mi three task', done: false}
  ])

  const createNewTask = (taskName) => {
    setTaskItems([...taskItems, {name: taskName, done: false}])
  }

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
