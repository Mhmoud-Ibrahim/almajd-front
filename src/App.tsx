import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";


const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,children: [
      {index: true,element: <Home />},
      {path: "about",element: <About />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;