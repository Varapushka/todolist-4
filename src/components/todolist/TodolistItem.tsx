import {Task} from "../../App.tsx";
import {Button} from "../buttons/Button/Button.tsx";
import s from "./TodolstItem.module.css"
import {Fragment} from "react";
import {TaskItem} from "./taskItem/TaskItem.tsx";



type Props = {
    title: string
    task: Task[]
    date?: string
}



export const TodolistItem = ({title, task, date}: Props) => {



    return (
        <Fragment>
            <div className={s.container}>

                <h3 >{title}</h3>
                <div>
                    <input />
                        <Button title={"+"} variant={'primary'}/>


                </div>
                {task.length === 0 ? <span>"Тасок нет"</span> : (
                <ul>
                    {task.map(el => {
                        return (
                            <TaskItem
                                task={el}
                                onToggle={()=>(console.log('checkbox is clicked'))}
                                onDelete={()=>(console.log('task is deleted'))}
                            />
                        )


                    })}
                </ul> )}
                <div>
                    <Button title={"All"}/>
                    <Button title={"Active"}/>
                    <Button title={"Completed"}/>
                </div>
                <div>{date}</div>
            </div>


        </Fragment>

    )
}
