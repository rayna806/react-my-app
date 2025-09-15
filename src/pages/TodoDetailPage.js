import {useParams} from "react-router";
import {useState, useEffect} from "react";
import Todoitem from "../components/Todoitem";
import {getTodoById} from "../api/mockApi";

export function TodoDetailPage() {
    const {id} = useParams();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTodoById(id)
            .then(data => {
                setTodo(data);
                setLoading(false);
            })
            .catch(() => {
                setTodo(null);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!todo) {
        return <div>Not found Todo</div>;
    }
    return <div>
        <h2>Todo Detail</h2>
        <Todoitem todo={todo} toggleTodo={() => {}} />
    </div>;
}
