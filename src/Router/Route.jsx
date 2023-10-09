import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Phones from "../Pages/Phones/Phones";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/iphone',
                element: <PrivateRoute><Phones/></PrivateRoute>,
                loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`),
            },
            {
                path: "/samsung",
                element: <PrivateRoute><Phones/></PrivateRoute>,
                loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=samsung`),
            },
            {
                path: "/oppo",
                element: <PrivateRoute><Phones/></PrivateRoute>,
                loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=oppo`),
            },
            {
                path: "/huawei",
                element: <PrivateRoute><Phones/></PrivateRoute>,
                loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=huawei`),
            },
            {
                path: "/phone/:id",
                element: <PrivateRoute><Details/></PrivateRoute>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/phone/${params.id}`),
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
        ]
    }
])

export default Route;