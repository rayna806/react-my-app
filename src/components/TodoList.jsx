import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
import'./TodoList.css'
import TodoGenerator from "./TodoGenerator";
import Todoitem from "./Todoitem";
import TodoGroup from "./TodoGroup";
const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext);
    function toggleTodo(id) {
        dispatch({type:'DONE', id})
    }
    return (
        <>
            <TodoGroup todos={state} onToggleTodo={toggleTodo} />
            <TodoGenerator />
        </>
    );
}

export default TodoList