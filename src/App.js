import {useEffect, useReducer} from "react";
import './App.css';
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./context/TodoContext";
import {NavLink, Outlet, RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import {api} from "./api/mockApi";
import {useTodoService} from "./useTodoService";

import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});

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
    const {loadTodos} = useTodoService();
    useEffect(()=> {
        loadTodos()
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