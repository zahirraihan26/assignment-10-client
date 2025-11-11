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




const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Homelaous></Homelaous>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=>fetch('http://localhost:3000/latest-movie')
                    
                },
                {
                    path:'/movies',
                    element:<Allmovies></Allmovies>,
                    loader:()=>fetch('http://localhost:3000/movies')
                },
                {
                    path:"/movies/:id",
                    element:<Moviedetails></Moviedetails>,
                    loader:({params})=>fetch(`http://localhost:3000/movies/${params.id}`)
                },
            ]
        },
       
       
        {
          path:"/movies/add",
          element:(
            <Privetrouts>
                <AddNewmovie></AddNewmovie>
            </Privetrouts>
          )
        },
        {
          path:"/my-collection",
          element:(
            <Privetrouts>
                <Mycollection></Mycollection>
            </Privetrouts>
          )
        },
        {
          path:"/mywatchlist",
          element: <Mywatchlist></Mywatchlist>
    
        },
       
        {
            path:"/movies/update/:id",
            element:(
                <Privetrouts>
                    <Updatemovie></Updatemovie>
                </Privetrouts>
            ),
            loader:({params})=>fetch(`http://localhost:3000/movies/${params.id}`)
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
            path:'/*',
            element:<h1>Error 404 </h1>
        },
    ]);

    export default router