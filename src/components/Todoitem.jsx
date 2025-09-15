import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function Todoitem({id, text, done, toggleTodo}) {
    const { dispatch } = useContext(TodoContext);
    return (
        <div key={id} className="todo-row">
            <div className={done ? 'todo-item done' : 'todo-item'}>
                <span onClick={() => toggleTodo(id)} style={{cursor: 'pointer'}}>{text}</span>
            </div>
            <button className="delete-btn" onClick={() => dispatch({type: 'DELETE', id})}>×</button>
        </div>
    )
}

export default Todoitem;