import {Task} from "../../App.tsx";
import {Button} from "../button/Button.tsx";


type Props = {
    title: string
    task: Task[]
    date?: string
}

export const TodolistItem = ({title, task, date}: Props) => {
    return (
        <>
            <div>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <Button title={"+"}/>
                </div>
                {task.length === 0 ? <span>"Тасок нет"</span> : (
                <ul>
                    {task.map(el => {
                        return (
                            <li key={el.id}>
                                <input type={"checkbox"} checked={el.isDone}/>
                                <span>{el.title}</span>

                            </li>)

                    })}
                </ul> )}
                <div>
                    <Button title={"All"}/>
                    <Button title={"Active"}/>
                    <Button title={"Completed"}/>
                </div>
                <div>{date}</div>
            </div>


        </>

    )
}
