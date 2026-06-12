import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import Register from "../Components/Register/Register";

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
        }
    ]
    
  },
  {
    path:'/register',
    Component:Register
  }
]);