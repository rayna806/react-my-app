import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import './TodoList.css';
import {api} from "../api/mockApi";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    function addTodo() {
        if (text.trim()) {
            api.post("/todos", { text: text.trim(), done: false })
                .then(res => res.data)
                .then(todo =>
                        dispatch({type:"ADD", payload: todo})
                )
            setText("");
        }

    }

    return (
        <div className="todo-generator">
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={addTodo}>add</button>
        </div>
    );
};

export default TodoGenerator;