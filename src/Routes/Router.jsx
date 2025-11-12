import { createBrowserRouter } from "react-router";
import Homelaous from "../Laouts/Homelaous";
import Register from "../Pages/Register/Register";
import Authlaous from "../Laouts/Authlaous";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Allmovies from "../Pages/Allmovies/Allmovies";
import Moviedetails from "../Pages/Moviedetails/Moviedetails";
import AddNewmovie from "../Pages/AddNewmovie/AddNewmovie";
import Privetrouts from "./Privetrouts";
import Updatemovie from "../Pages/Updatemovie/Updatemovie";
import Mycollection from "../Pages/Mycollection/Mycollection";
import Mywatchlist from "../Pages/Mywatchlist/Mywatchlist";
import Error from "../Component/Error/Error";
import Loading from "../Component/Loading/Loading";
import Myprofile from "../Component/Myprofile/Myprofile";




const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Homelaous></Homelaous>,
            errorElement: <Error></Error>,
            hydrateFallbackElement: <Loading></Loading>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://movie-master-pro-server-tau.vercel.app/latest-movie'),
                    hydrateFallbackElement: <Loading></Loading>

                },
                {
                    path: '/movies',
                    element: <Allmovies></Allmovies>,
                    loader: () => fetch('https://movie-master-pro-server-tau.vercel.app/movies'),
                    hydrateFallbackElement: <Loading></Loading>
                },
                {
                    path: "/movies/:id",
                    element: <Moviedetails></Moviedetails>,
                    loader: ({ params }) => fetch(`https://movie-master-pro-server-tau.vercel.app/movies/${params.id}`),
                    hydrateFallbackElement: <Loading></Loading>

                },
            ]
        },


        {
            path: "/movies/add",
            element: (
                <Privetrouts>
                    <AddNewmovie></AddNewmovie>
                </Privetrouts>
            )
        },
        {
            path: "/my-collection",
            element: (
                <Privetrouts>
                    <Mycollection></Mycollection>
                </Privetrouts>
            )
        },
        {
            path: "/mywatchlist",
            element: <Mywatchlist></Mywatchlist>

        },

        {
            path: "/movies/update/:id",
            element: (
                <Privetrouts>
                    <Updatemovie></Updatemovie>
                </Privetrouts>
            ),
            loader: ({ params }) => fetch(`https://movie-master-pro-server-tau.vercel.app/movies/${params.id}`),
            hydrateFallbackElement: <Loading></Loading>

        },

        {
            path: '/auth',
            element: <Authlaous></Authlaous>,
            children: [
                {
                    path: "login",
                    element: <Login></Login>
                },
                {
                    path: "register",
                    element: <Register></Register>
                },

            ]
        },
        {
            path: '/myprofile',
            element: <Myprofile></Myprofile>
        },

        {
            path: '/*',
            element: <Error></Error>
        },
    ]);

export default router