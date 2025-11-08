import { createBrowserRouter } from "react-router";
import Homelaous from "../Laouts/Homelaous";
import Register from "../Pages/Register/Register";
import Authlaous from "../Laouts/Authlaous";
import Login from "../Pages/Login/Login";


const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Homelaous></Homelaous>
        },
        {
            path:'/auth',
            element:<Authlaous></Authlaous>,
            children:[
                {
                    path:"login",
                    element:<Login></Login>
                },
                {
                    path:"register",
                    element:<Register></Register>
                },

            ]
        },
        {
            path:'/news',
            element:<h1>News </h1>
        },
        {
            path:'/*',
            element:<h1>Error 404 </h1>
        },
    ]);

    export default router