import './App.css'
import {TodolistItem} from "./components/todolist/TodolistItem.tsx";

export type Task = {
    id: number,
    title: string,
    isDone: boolean

}
export const App = () => {

    const task1: Task[] = [
        {id:1, isDone: true, title: "HTML&CSS"},
        {id:2, isDone: true, title: "JS"},
        {id:3, isDone: false, title: "React"},
        {id:4, isDone: false, title: "Redux"},
        {id:5, isDone: false, title: "Typescript"},
        {id:6, isDone: false, title: "RTK query"},
    ]
  const task2: Task[] = [
      {id:1, isDone: true, title: "Run"},
      {id:2, isDone: true, title: "Gum"},
      {id:3, isDone: false, title: "Stretching"},
      {id:4, isDone: false, title: "Meditation"},
    ]

  return (
      <div className="app">
      <TodolistItem title={'What to learn'} task={task1} date={'15.08.2025'}/>
      <TodolistItem title={'Sport'} task={task2}/>

  </div>
  )
}


