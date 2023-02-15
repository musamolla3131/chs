import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter({
    routes: [
        {
            path: "/",
            component: () => <div>Home</div>,
        },
        {
            path: "/about",
            component: () => <div>About</div>,
        },
        {
            path: "/contact",
            component: () => <div>Contact</div>,
        },
    ],
});


export default Router;