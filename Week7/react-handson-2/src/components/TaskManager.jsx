import AddTask from "./AddTask"
import TasksList from "./TasksList"
import TasksCount from "./TasksCount"
import {useState} from 'react'

function TaskManager() {
    let [tasks,setTasks]=useState([]);
    const addNewTask=(taskObj)=>{
        setTasks([...tasks,taskObj])
    }
  return (
    <div >
        <h1  className="text-7xl bg-blue-300 mb-10">TaskManager</h1>
        <div className="flex justify-around text-2xl">
            <AddTask addNewTask={addNewTask} />
            <TasksList tasks={tasks} />
            <TasksCount tasks={tasks} />
        </div>
    </div>
  )
}

export default TaskManager