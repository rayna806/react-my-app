import Todoitem from "./Todoitem";

function TodoGroup({ todos, onToggleTodo }) {
    return (
        <div className="todo-group">
            <div className="todo-title">TodoList</div>
            {
                todos.map(({id, text, done}) => (
                    <Todoitem
                        key={id}
                        id={id}
                        text={text}
                        done={done}
                        toggleTodo={onToggleTodo}
                    />
                ))
            }
        </div>
    );
}

export default TodoGroup;