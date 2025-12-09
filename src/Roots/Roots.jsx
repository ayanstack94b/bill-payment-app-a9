
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path:'/',
                element:
            }
        ]
    },
 
]);

export default router;