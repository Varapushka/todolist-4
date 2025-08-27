import {Task} from "../../App.tsx";
import {Button} from "../buttons/Button/Button.tsx";
import s from "./TodolistItem.module.css";
import {Fragment} from "react";
import {TaskItem} from "./taskItem/TaskItem.tsx";
import {InputForm} from "../inputForm/InputForm.tsx";




type Props = {
    title: string
    task: Task[]
    date?: string
    DeleteTask: (id: string) => void
}



export const TodolistItem = ({title, task, date, DeleteTask}: Props) => {

    const DeleteTaskHandler = (id: string) => {
        DeleteTask(id)
    }

    return (
        <Fragment>
            <div className={s.container}>

                <h3 >{title}</h3>
                <div>
                    <InputForm
                        onSubmit={(text: string) => {console.log('task added', text)}}
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
                                onToggle={()=>(console.log('checkbox is clicked'))}
                                onDelete={()=>DeleteTaskHandler(el.id)}
                            />
                        )


                    })}
                </ul> )}
                <div>
                    <Button title={"All"} variant={"primary"}/>
                    <Button title={"Active"} variant={"primary"}/>
                    <Button title={"Completed"} variant={"primary"}/>
                </div>
                <div>{date}</div>
            </div>


        </Fragment>

    )
}
