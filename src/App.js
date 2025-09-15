import { useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers/todoReducer";
import { TodoContext } from "./context/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider,useRouteError} from "react-router";

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
function ErrorPage() {
    const error = useRouteError();
    return <div>
        {error.status ===404
            ?<div><h1>404 not found</h1><span>Try</span></div>
            :<div>{JSON.stringify(error)}</div>}

    </div>;
}



const routes= createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement:<ErrorPage />,
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
                <RouterProvider router={routes} />
            </TodoContext.Provider>
        </div>
    );
}

export default App;