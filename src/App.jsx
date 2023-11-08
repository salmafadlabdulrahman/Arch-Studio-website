import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

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
          element: <h1>Contact Page</h1>,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
