import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayouth from "./Layouth/main/MainLayouth";
import Home from "./Layouth/main/pages/Home";
import Shop from "./Layouth/main/pages/Filter/Shop";
import About from "./Layouth/main/pages/About";
import Contact from "./Layouth/main/pages/Contact";
import Wishlist from "./Layouth/main/pages/Wishlist";
import Detail from "./Layouth/main/pages/Detail";
import Mycart from "./Layouth/main/pages/Mycart";
import Accaunt from "./Layouth/main/pages/Accaunt";
import AuthLayouth from "./Layouth/auth/AuthLayouth";
import Login from "./Layouth/auth/pages/Login";
import Register from "./Layouth/auth/pages/Register";
import AdminLayouth from "./AdminDashboard/main/AdminLayouth";
import AdminHome from "./AdminDashboard/main/pages/AdminHome";
import ItemsAdd from "./AdminDashboard/main/pages/mainAppAdd/ItemsAdd";
import ItemsProductApp from "./AdminDashboard/main/pages/mainAppAdd/ItemsProductApp";
import CreateItem from "./AdminDashboard/components/CreateItem";
import BlogDetails from "./Layouth/main/pages/BlogDetails";
import FeaturedCollectionsCart from "./Layouth/main/pages/FeaturedCollectionsCart";
const router = createBrowserRouter([
    {
            path: "/",
            element: <MainLayouth />,
            children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "wishlist",
                element: <Wishlist />,
            },
            {
                path: "home/:id",
                element: <Detail/>,
            },
            {
                path: "shop",
                element: <Shop/>,
            },
            {
                path: "accaunt",
                element: <Accaunt/>,
            },
            {
                path: "mycart",
                element: <Mycart/>,
            },
            {
                path: "blog/:id",
                element: <BlogDetails/>,
            },
            // {
            //     path: "home/:id",
            //     element: <FeaturedCollectionsCart/>,
            // },
        ],
    },
    {
    path: "auth",
    element: <AuthLayouth/>,
    children: [
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        }
        
    ]
    },
    //adminDashbord
    {
        path: "/",
        element: <AdminLayouth/>,
        children: [
            {
                path: "admin",
                element: <AdminHome/>,
            },
            {
                path: "/mainapp/:slug",
                element: <ItemsAdd/>,
            },
            {
                path: "/mainapp/:slug/:item",
                element: <ItemsProductApp/>,
            },
            {
                path: "/mainapp/CreateItem/:model",
                element: <CreateItem/>,
            },
        ]
    }
    
]);

export const MainRouterDom = () => {
    return <RouterProvider router={router} />
}