import {useEffect, useReducer} from "react";
import './App.css';
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./context/TodoContext";
import {NavLink, Outlet, RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import {TodoDetailPage} from "./pages/TodoDetailPage";
import axios from "axios";

const api = axios.create({
    baseURL:"https://68c7ac935d8d9f5147328860.mockapi.io/",
    headers: {"Content-Type":"application/json"},
    timeout:10_000
})

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

function App() {
    // the Hooks API manage component data state
    const [state, dispatch] = useReducer(todoReducer, initialState);
    useEffect(()=> {
        api.get("/todos")
            .then(response => response.data)
            .then(todos => dispatch({type:"LOAD_TODOS", payload: todos}))
    },[dispatch])


    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes} />
            </TodoContext.Provider>
        </div>
    );
}


export default App;