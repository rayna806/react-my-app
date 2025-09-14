import {createContext, useContext, useReducer} from "react";
import "./App.css"
import {TodoItem} from "./components/TodoItem";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];
export const TodoContext = createContext()

function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext);
    return (
        <div>
            {state.map((item, index) => {
                return <TodoItem todo={item} key={index} index={index}/>
            })}
        </div>
    );
}

export function todoReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_TODO":
            /// copy
            const newState = [...state];
            const id = action.payload.id;
            return newState.map((value) => {
                if (value.id === id) {
                    return { id,
                        text: value.text,
                        done: !value.done
                    };
                }

                return value
            })
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <TodoGroup/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;