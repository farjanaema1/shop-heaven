import OrderLayout from "../../Layout/orderLayout";
import AllOrder from "../../pages/orders/AllOrder";
import Cart from "../../pages/orders/shoppingCart/Cart";

import Women from "../../pages/women/women";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../pages/Home/Home/home");
const { default: LogIn } = require("../../pages/login/login");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/women',
                element:<Women></Women>
            },
        ]
    },
    {
        path:'/order',
        element:<OrderLayout></OrderLayout>,
        children:[
            {
                path:'/order',
                element:<Cart></Cart>


            },
            {
                path:'/order/allorder',
                element:<AllOrder></AllOrder>

            }
        ]
    }
])
export default router;