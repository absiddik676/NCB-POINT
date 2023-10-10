import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Category from "../page/Admin/Category/Category";
import EditCategory from "../page/Home/Category/EditCategory";
import AddProduct from "../page/Admin/AddProduct/AddProduct";
import Products from "../page/Products/Products";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/filterProducts/:name',
                element: <Products/>,
                loader: ({ params }) => fetch(`http://localhost:3000/filterdProduct/${params.name}`),
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/category',
                element: <Category />
            },
            {
                path: '/dashboard/edit-category/:id',
                element: <EditCategory />,
                loader: ({ params }) => fetch(`http://localhost:3000/single-category/${params.id}`),
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct />,
            },
        ]
    },

]);
export default router