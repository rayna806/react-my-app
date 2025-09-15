import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
import Todoitem from "../components/Todoitem";

export function TodoDetailPage() {
    const {id} = useParams()
    const {state, dispatch} = useContext(TodoContext);
    const todo = state.filter((todo) => todo.id === id); // Fix syntax error by changing '}' to ';'

    if (todo.length === 0) {
        return <div>Not found Todo</div>
    }

    return <div>
        <Todoitem todo={todo[0]} index={id}/>
    </div>

}
