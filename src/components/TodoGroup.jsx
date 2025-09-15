import Todoitem from "./Todoitem";

function TodoGroup({ todos, onToggleTodo }) {
    return (
        <div className="todo-group">
            <div className="todo-title">TodoList</div>
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