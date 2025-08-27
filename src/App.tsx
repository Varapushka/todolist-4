import './App.css'
import {TodolistItem} from "./components/todolist/TodolistItem.tsx";
import './styles/theme.css'
import {ThemeToggleButton} from "./components/buttons/ThemeToggleButton/ThemeToggleButton.tsx";
import {useState} from "react";
import {TaskFilter} from "./components/todolist/TaskFilter.tsx";
import {v1} from "uuid";



export type Task = {
  id: string
  title: string
  isDone: boolean
}


export const App = () => {


  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'Typescript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
  ])

    const [filter, setFilter] = useState<TaskFilter>('All')

    let filteredTasks: Task[] = tasks

    if (filter === 'All') {filteredTasks = tasks}

    if (filter === 'Active') {filteredTasks = tasks.filter(task => !task.isDone)}

    if (filter === 'Completed') {filteredTasks = tasks.filter(task => task.isDone)}

    const changeFilter = (filter: TaskFilter) => {
      setFilter(filter)
    }

    const DeleteTask = (id: string) => {
    return setTasks(tasks.filter((task) => task.id != id))
    }

    const addTask = (title: string) => {
      const newTask: Task = {id: v1(), title: title, isDone: false}
      setTasks([...tasks, newTask])

    }
    const toggleTask = (id: string, isDone: boolean) => {
     setTasks(tasks.map(el => el.id === id ? {...el, isDone: !isDone } : el))
    }

  return (
      <div className="app">
        <ThemeToggleButton/>
          <TodolistItem
              title={"What to learn"}
              task={filteredTasks}
              DeleteTask={DeleteTask}
              changeFilter={changeFilter}
              addTask={addTask}
              toggleTask={toggleTask}
          />


      </div>
  )
}
