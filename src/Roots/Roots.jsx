
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootsLayout from "../Layout/RootsLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootsLayout></RootsLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/bills',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <Home></Home>
            },
        ]
    },

]);

export default router;