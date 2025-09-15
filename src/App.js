import {useContext, useReducer} from "react";
import './App.css';
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./context/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import Todoitem from "./components/Todoitem";
import { DoneListPage } from "./pages/DoneListPage";
import { AboutUsPage } from "./pages/AboutUsPage";


function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/done"}>Done List</NavLink></li>
                    <li><NavLink to={"/aboutus"}>About Us</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}
function TodoDetailPage() {
    const{id}=useParams()
    const {state,dispatch}=useContext(TodoContext);
    const todo=state.filter((todo)=>todo.id===parseInt(id))

    if(todo.length === 0){
        return <div>Not found Todo</div>
    }

    return <div>
        <Todoitem todo={todo[0]} index={id} />
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
                element:<HomePage />
            },
            {
                path:"/todos/:id",
                element:<TodoDetailPage />
            },
            {
                path: "/done",
                element: <DoneListPage />
            },
            {
                path: "/aboutus",
                element: <AboutUsPage />
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