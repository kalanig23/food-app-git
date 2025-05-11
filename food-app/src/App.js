import ReactDom from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import '../index.css';
import { createBrowserRouter, RouterProvider } from "react-router";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <About/>
    },
])
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);