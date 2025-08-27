import {Task} from "../../App.tsx";
import {Button} from "../buttons/Button/Button.tsx";
import s from "./TodolistItem.module.css";
import {Fragment} from "react";
import {TaskItem} from "./taskItem/TaskItem.tsx";
import {InputForm} from "../inputForm/InputForm.tsx";
import {TaskFilter} from "./TaskFilter.tsx";




type Props = {
    title: string
    task: Task[]
    date?: string
    DeleteTask: (id: string) => void
    changeFilter: (filter: TaskFilter) => void
    addTask: (title: string) => void
    toggleTask: (id: string, isDone: boolean) => void
}



export const TodolistItem = ({
                                 title,
                                 task,
                                 date,
                                 DeleteTask,
                                 changeFilter,
                                 addTask,
                                 toggleTask,
}: Props) => {

    const DeleteTaskHandler = (id: string) => {
        DeleteTask(id)
    }

    const changeFilterHandler = (filter: TaskFilter) => {
        changeFilter(filter)
    }
    const addTaskHandler = (title: string) => {
        addTask(title)
    }
    const toggleTaskHandler = (id: string, isDone: boolean) => {
        toggleTask(id, isDone)
    }

    return (
        <Fragment>
            <div className={s.container}>

                <h3 >{title}</h3>
                <div>
                    <InputForm
                        onSubmit={(text: string) => {addTaskHandler(text)}}
                        placeholder={'Write your task...'}
                        buttonLabel={'Add'}
                    />


                </div>
                {task.length === 0 ? <span>"Тасок нет"</span> : (
                <ul>
                    {task.map(el => {
                        return (
                            <TaskItem
                                key={el.id}
                                task={el}
                                onToggle={()=>toggleTaskHandler(el.id, el.isDone)}
                                onDelete={()=>DeleteTaskHandler(el.id)}
                            />
                        )


                    })}
                </ul> )}
                <div>
                    <Button title={"All"} variant={"primary"} onClick={()=>changeFilterHandler("All")}/>
                    <Button title={"Active"} variant={"primary"} onClick={()=>changeFilterHandler("Active")}/>
                    <Button title={"Completed"} variant={"primary"} onClick={()=>changeFilterHandler("Completed")}/>
                </div>
                <div>{date}</div>
            </div>


        </Fragment>

    )
}
