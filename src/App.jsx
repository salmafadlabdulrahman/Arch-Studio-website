import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
