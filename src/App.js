import { useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers/todoReducer";
import { TodoContext } from "./context/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}

const routes= createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element:<TodoList />
            }
        ]
    }

]);

function App() {
    // the Hooks API manage component data state
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;