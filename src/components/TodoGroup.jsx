import Todoitem from "./Todoitem";

function TodoGroup({ todos, onToggleTodo, title = "TodoList" }) {
    return (
        <div className="todo-group">
            {title ? <div className="todo-title">{title}</div> : null}
            {
                todos.map(todo => (
                    <Todoitem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={onToggleTodo}
                    />
                ))
            }
        </div>
    );
}

export default TodoGroup;