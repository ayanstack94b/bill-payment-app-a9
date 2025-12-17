
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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loading from "../Pages/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootsLayout></RootsLayout>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/bills',
                element: (
                    <PrivateRoute>
                        <Bills />
                    </PrivateRoute>
                ),
                loader: async () => {
                    const res = await fetch('/Fakedata.json');
                    if (!res.ok) throw new Error('Failed to load bills');
                    return res.json();
                },
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/bills/:id',
                element: (
                    <PrivateRoute>
                        <SingleBill />
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    const res = await fetch('/Fakedata.json');
                    const data = await res.json();
                    return data.find(bill => bill.id === Number(params.id));
                },
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                )
            },
            {
                path: '/profile/edit',
                element: (
                    <PrivateRoute>
                        <Edit />
                    </PrivateRoute>
                )
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/*',
                element: <Error />
            }
        ]

    },

]);

export default router;