import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/portfolio",
          element: <h1>This is the portfolio page</h1>,
        },
        {
          path: "/contact",
          element: <h1>This is the contact page</h1>,
        },
        {
          path: "/about",
          element: <h1>This is the about us page</h1>,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
