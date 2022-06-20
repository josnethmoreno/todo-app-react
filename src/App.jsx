import { useState, useEffect } from 'react'
import './App.css'
import TaskCreator from '/src/components/TaskCreator.jsx'
import VisibilityControl from '/src/components/VisibilityControl.jsx'
import { TaskContent } from '/src/components/TaskContent.jsx'

function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showCompletedContent, setShowChompletedContent] = useState(false)

  const createNewTask = (taskName) => {
    if(!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }

  const toggleTask = (task) => {
    console.log(task)
    setTaskItems(
      taskItems.map((t) => (t.name == task.name ? {...t, done: !t.done} : t))
    )
  }

  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowChompletedContent(false)
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
      <TaskContent tasks={taskItems} toggleTask={toggleTask} showCompleted={false}/>

      <VisibilityControl 
        setShowChompletedContent={setShowChompletedContent}
        value={showCompletedContent}
        cleanTask={cleanTask} 
      />

      {
        showCompletedContent && (
          <TaskContent tasks={taskItems} toggleTask={toggleTask} showCompleted={true}/>
        )
      }


    </div>
  )
}

export default App
