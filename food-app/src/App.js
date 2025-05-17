import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";
import Error from "./component/Error";
import '../index.css';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
        ],
        errorElement: <Error/>
    },
])
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);