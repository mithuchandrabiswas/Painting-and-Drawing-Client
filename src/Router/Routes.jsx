import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home";
// import LogIn from "../pages/LogIn";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRoutes from "./PrivateRoutes";
import MyArtAndCraft from "../pages/MyArtAndCraft";
// import Register from "../pages/Register";

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
                loader: () => fetch('https://painting-and-drawing-server.vercel.app/addcrafts'),
            },
            {
                path: "/addcraft",
                element: <PrivateRoutes><AddCraftItem /></PrivateRoutes>,
            },
            {
                path: "/myart&craft",
                element: <PrivateRoutes><MyArtAndCraft /></PrivateRoutes>,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register/>,
            },
        ],
    },
]);

export default router;