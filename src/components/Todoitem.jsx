import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router";
import { updateTodo, deleteTodo } from "../api/mockApi";

function Todoitem({todo, toggleTodo}) {
    const { dispatch } = useContext(TodoContext);
    const navigate = useNavigate();
    if (!todo) return null;
    const { id, text, done } = todo;

    function handleToggle() {
        updateTodo(id, { ...todo, done: !done })
            .then(updatedTodo => {
                dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
            });
    }
    function handleDelete() {
        deleteTodo(id)
            .then(() => {
                dispatch({ type: "DELETE_TODO", payload: id });
            });
    }
    return (
        <div key={id} className="todo-row">
            <div className={done ? 'todo-item done' : 'todo-item'}>
                <span onClick={handleToggle} style={{cursor: 'pointer'}}>{text}</span>
            </div>
            <button className="delete-btn" onClick={handleDelete}>×</button>
            <button className="detail-btn" onClick={() => navigate(`/todos/${id}`)}>Detail</button>
        </div>
    )
}

export default Todoitem;