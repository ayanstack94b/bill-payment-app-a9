
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootsLayout from "../Layout/RootsLayout";
import Bills from "../Pages/Bills";
import Profile from "../Pages/Profile";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Error from "../Pages/Error";
import Edit from "../Pages/Edit";


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
                element: <Bills></Bills>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/profile/edit',
                element: <Edit></Edit>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <Error></Error>
            },
        ]
    },

]);

export default router;