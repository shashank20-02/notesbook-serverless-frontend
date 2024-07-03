import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import CreateNote from "./Pages/CreateNote.jsx";
import ViewNote from "./Pages/ViewNote.jsx";
import Notes from "./Pages/Notes.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "notes",
                element: (
                    <ProtectedRoute>
                        <Notes />
                    </ProtectedRoute>
                ),
            },
            {
                path: "create",
                element: (
                    <ProtectedRoute>
                        <CreateNote />
                    </ProtectedRoute>
                ),
            },
            {
                path: "view",
                element: (
                    <ProtectedRoute>
                        <ViewNote />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

export default router;
