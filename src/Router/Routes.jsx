import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../../ErrorPage"
import Home from "../pages/Home";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRoutes from "./PrivateRoutes";
import MyArtAndCraft from "../pages/MyArtAndCraft";
import AllArtAndCraftCardDetails from "../pages/AllArtAndCraftCardDetails";
import MyArtAndCraftCardDetails from "../pages/MyArtAndCraftCardDetails";
import CraftItemsCardDetails from "../pages/CraftItemsCardDetails";
import ArtAndCraftCategoriesPage from "../pages/ArtAndCraftCategoriesPage";
import ArtAndCraftCategoriesCardDetails from "../pages/ArtAndCraftCategoriesCardDetails";
import UpdateCraftPage from '../pages/UpdateCraftPage';

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
                path: "/Sub/:subcategory_Name",
                element: <ArtAndCraftCategoriesPage />,
                loader: () => fetch('https://painting-and-drawing-server.vercel.app/addcrafts'),
            },
            {
                path: "/artAndCraftCategoriesCardDetails/:id",
                element: <ArtAndCraftCategoriesCardDetails />,
                loader: () => fetch('https://painting-and-drawing-server.vercel.app/addcrafts'),
            },
            {
                path: "/crafitemstdetails/:id",
                element: <PrivateRoutes><CraftItemsCardDetails /></PrivateRoutes>,
                loader: () => fetch('https://painting-and-drawing-server.vercel.app/addcrafts'),
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
                path: "/updatecraft/:id",
                element: <UpdateCraftPage />,
                loader: ({ params }) => fetch(`https://painting-and-drawing-server.vercel.app/addcrafts/${params.id}`),
            },
            {
                path: "/myart&craft",
                element: <PrivateRoutes><MyArtAndCraft /></PrivateRoutes>,
                loader: () => fetch('https://painting-and-drawing-server.vercel.app/addcrafts'),
            },
            {
                path: "/myartandcraftdetails/:id",
                element: <PrivateRoutes><MyArtAndCraftCardDetails /></PrivateRoutes>,
                loader: async () => fetch('https://painting-and-drawing-server.vercel.app/addcrafts'),
            },
            {
                path: "/allartandcraftdetails/:id",
                element: <PrivateRoutes><AllArtAndCraftCardDetails /></PrivateRoutes>,
                loader: async () => fetch('https://painting-and-drawing-server.vercel.app/addcrafts'),
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