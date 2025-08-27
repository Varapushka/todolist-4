import './App.css'
import {TodolistItem} from "./components/todolist/TodolistItem.tsx";
import './styles/theme.css'
import {ThemeToggleButton} from "./components/buttons/ThemeToggleButton/ThemeToggleButton.tsx";
import {useState} from "react";



export type Task = {
  id: string
  title: string
  isDone: boolean
}


export const App = () => {

  const [tasks, setTasks] = useState<Task[]>([
    { id: crypto.randomUUID(), title: 'HTML&CSS', isDone: true },
    { id: crypto.randomUUID(), title: 'JS', isDone: true },
    { id: crypto.randomUUID(), title: 'ReactJS', isDone: false },
    { id: crypto.randomUUID(), title: 'Redux', isDone: false },
    { id: crypto.randomUUID(), title: 'Typescript', isDone: false },
    { id: crypto.randomUUID(), title: 'RTK query', isDone: false },
  ])

    const DeleteTask = (id: string) => {
    return setTasks(tasks.filter((task) => task.id != id))
    }

  return (
      <div className="app">
        <ThemeToggleButton/>
          <TodolistItem
              title={"What to learn"}
              task={tasks}
              DeleteTask={DeleteTask}
          />


      </div>
  )
}
