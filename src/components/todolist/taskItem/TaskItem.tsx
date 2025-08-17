import s from "./TaskItem.module.css";
import {Task} from "../../../App.tsx";
import {Button} from "../../buttons/Button/Button.tsx";

type Props = {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

export const TaskItem = ({ task, onToggle, onDelete }: Props) => {
    return (
        <li className={s.card}>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => onToggle(task.id)}
            />
            <span className={task.isDone ? s.completed : ''}>{task.title}</span>
            <Button title="x" variant="delete" onClick={() => onDelete(task.id)}/>
        </li>
    )
}