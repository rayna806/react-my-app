import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoGroup from "../components/TodoGroup";

function DoneListPage() {
    const { state } = useContext(TodoContext);
    const doneTodos = state.filter(todo => todo.done);
    return (
        <div>
            <h2>Done List</h2>
            {doneTodos.length === 0 ? (
                <div>暂无已完成任务</div>
            ) : (
                <TodoGroup todos={doneTodos} onToggleTodo={() => {}} title={null} />
            )}
        </div>
    );
}

export { DoneListPage };
