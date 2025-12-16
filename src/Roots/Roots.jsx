
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootsLayout from "../Layout/RootsLayout";
import Bills from "../Pages/Bills";
import Profile from "../Pages/Profile";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Error from "../Pages/Error";
import Edit from "../Pages/Edit";
import SingleBill from "../Pages/SingleBill";


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
                element: <Bills></Bills>,
                loader: async () => {
                    const res = await fetch('/Fakedata.json');
                    if (!res.ok) throw new Error('Failed to load bills');
                    return res.json();
                }
            },
            {
                path: "/bills/:id",
                element: <SingleBill />,
                loader: async ({ params }) => {
                    const res = await fetch("/Fakedata.json");
                    const data = await res.json();
                    return data.find(bill => bill.id === Number(params.id));
                }
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