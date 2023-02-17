import { createBrowserRouter } from "react-router-dom";
import Login from "../../admin/login";
import CreateAccount from "../../admin/createAccount";
import ForgotPasword from "../../admin/forgotPassword";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/create-account",
        element: <CreateAccount />
    },
    {
        path: "/forgot-password",
        element: <ForgotPasword />
    },

]);

export default Router;