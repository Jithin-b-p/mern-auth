import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  { path: "/about", element: <About /> },
  { path: "/profile", element: <Profile /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
