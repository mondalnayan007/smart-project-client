import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import Register from "../Components/Register/Register";
import MyProducts from "../Components/MyProducts/MyProducts";
import MyBids from "../Components/MyBids/MyBids";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component:Home

        },
        {
            path:'/allproducts',
            Component:AllProducts
        },
        {
            path:'/myproducts',
            Component:MyProducts
        },
        {
            path:'/mybids',
            Component:MyBids
        },

    ]
    
  },
  {
    path:'/register',
    Component:Register
  },
  {
    path:'/login',
    Component:Login
  }
]);