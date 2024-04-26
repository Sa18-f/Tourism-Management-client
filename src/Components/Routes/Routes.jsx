import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddSpots from "../AddSpots/AddSpots";
import AllSpots from "../AllSpots/AllSpots";
import MyList from "../MyList/MyList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ViewDetails from "../ViewDetails/ViewDetails";


const Routes = createBrowserRouter([
    {
       path: '/',
       element: <Root></Root>,
       children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:4000/spots')
        },
        {
            path: '/addSpot',
            element: <AddSpots></AddSpots>
        },
        {
            path: '/allSpots',
            element: <AllSpots></AllSpots>,
            loader: () => fetch('http://localhost:4000/spots')
        },
        {
            path: '/myList',
            element: <MyList></MyList>
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
            path: '/spots/:id',
            element: <ViewDetails></ViewDetails>,
            loader: () => fetch('http://localhost:4000/spots')
        }
       ]
    }
])

export default Routes;