import { createBrowserRouter} from 'react-router-dom'
import App from "../App";
// import Navbar from '../components/navbar';
import Home from '../home'
import SignIn from '../sign'
import Profile from '../profile';
import ErrorPage from '../error';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<ErrorPage />,
    
        children: [
            {index: true, element: <Home />},
            {
                path: "/sign",
                element: <SignIn />,
            },
            {
                path: "/home",
                element:<Home />,
            },
            {
                path: "/profile",
                element:<Profile />,
            },
        ],
    },

]);
