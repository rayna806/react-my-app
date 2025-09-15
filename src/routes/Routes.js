import {createBrowserRouter} from "react-router";
import {ErrorPage} from "../pages/ErrorPage";
import {HomePage} from "../pages/HomePage";
import {DoneListPage} from "../pages/DoneListPage";
import {AboutUsPage} from "../pages/AboutUsPage";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {TodoDetailPage} from "../pages/TodoDetailPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage/>
            },
            {
                path: "/done",
                element: <DoneListPage/>
            },
            {
                path: "/aboutus",
                element: <AboutUsPage/>
            }
        ]
    }

]);