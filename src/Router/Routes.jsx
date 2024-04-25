import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home";
import SignOut from "../pages/SignOut"
import SignIn from "../pages/SignIn";
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
                element: <SignIn />,
            },
            {
                path: "/register",
                element: <SignOut />,
            },
        ],
    },
]);

export default router;