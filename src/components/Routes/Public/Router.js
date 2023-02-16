import { createBrowserRouter } from "react-router-dom";
import login from "../../admin/login"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <login />,
    },
    {
        path: "/create-account",
        element: <create
    },
    {
        path: "/forgot-password",
        element: <forgotPasword />
    },

]);


export default Router;