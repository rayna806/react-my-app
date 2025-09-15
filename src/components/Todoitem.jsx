import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router";

function Todoitem({todo, toggleTodo}) {
    const { dispatch } = useContext(TodoContext);
    const navigate = useNavigate();
    if (!todo) return null;
    const { id, text, done } = todo;
    return (
        <div key={id} className="todo-row">
            <div className={done ? 'todo-item done' : 'todo-item'}>
                <span onClick={() => toggleTodo(id)} style={{cursor: 'pointer'}}>{text}</span>
            </div>
            <button className="delete-btn" onClick={() => dispatch({type: 'DELETE', id})}>×</button>
            <button className="detail-btn" onClick={() => navigate(`/todos/${id}`)}>Detail</button>
        </div>
    )
}

export default Todoitem;