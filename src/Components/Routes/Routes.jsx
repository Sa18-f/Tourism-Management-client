import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddSpots from "../AddSpots/AddSpots";
import AllSpots from "../AllSpots/AllSpots";
import MyList from "../MyList/MyList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ViewDetails from "../ViewDetails/ViewDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdatePage from "../UpdatePage/UpdatePage";
import CountryDetailsPage from "../CountryDetailsPage/CountryDetailsPage";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tourism-management-server-theta.vercel.app/spots')
            },
            {
                path: '/addSpot',
                element: <PrivateRoute>
                    <AddSpots></AddSpots>
                </PrivateRoute>
            },
            {
                path: '/allSpots',
                element: <AllSpots></AllSpots>,
                loader: () => fetch('https://tourism-management-server-theta.vercel.app/spots')
            },
            {
                path: '/myList',
                element: <PrivateRoute>
                    <MyList></MyList>
                </PrivateRoute>,
                loader: () => fetch('https://tourism-management-server-theta.vercel.app/spots')
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
                element: <PrivateRoute>
                    <ViewDetails></ViewDetails>
                </PrivateRoute>,
                loader: () => fetch('https://tourism-management-server-theta.vercel.app/spots')
            },
            {
                path: '/updatePage/:id',
                element: <UpdatePage></UpdatePage>,
                loader: ({params}) => fetch(`https://tourism-management-server-theta.vercel.app/spots/${params.id}`)
            },
            {
                path: '/countries/:id',
                element: <CountryDetailsPage></CountryDetailsPage>,
                loader: () => fetch('https://tourism-management-server-theta.vercel.app/countries')
            }
        ]
    }
])

export default Routes;