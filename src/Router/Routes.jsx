import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home";
import Register from "../pages/SignOut"
import LogIn from "../pages/LogIn";
import AllArtAndCraft from "../pages/AllArtAndCraft";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/allart&craft",
                element: <AllArtAndCraft />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;