import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Login from "./components/auth/login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";


const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,children: [
      {index: true,element: <Home />},
      {path: "/",element: <Home/>},
      {path: "about",element: <About/>},
      {path: "register",element: <Register/>},
      {path: "login",element: <Login/>},
      {path: "forgot-password",element: <ForgotPassword/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;