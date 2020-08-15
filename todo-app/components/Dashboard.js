import React, { useState, useEffect } from 'react';
import Header from './Header'
import { Tasks } from './Tasks'
import CreateTask from './CreateTask'
import { getAllTasks, deleteTask } from '../services/ToDoService'

function Dashboard() {

  const [tasks, setTasks] = useState([])
  const [numberOfTasks, setNumberOfTasks] = useState([])
  const [isTaskEdited, setTaskEdited] = useState(false)

  useEffect(() => {
    getAllTasks().then(tasks => {
        console.log(tasks)
        setTasks(tasks)
      });
  }, [numberOfTasks, isTaskEdited])

  function delTask(taskId) {
      deleteTask(taskId).then(response => {
        console.log(response)
        setNumberOfTasks(numberOfTasks - 1)
      });
  }

  function taskCreated() {
    setNumberOfTasks(numberOfTasks + 1)
  }

  function taskEdited(res) {
     setTaskEdited(res)
  }
    
  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
              <CreateTask taskCreated={taskCreated}></CreateTask>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Tasks tasks={tasks} deleteTask={delTask} taskEdited={taskEdited}></Tasks>
      </div>
    </div>
  );
}

export default Dashboard;