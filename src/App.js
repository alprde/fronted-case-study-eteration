import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";
import './App.css';
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Products/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/detail/*",
        element: <Detail/>,
      },
    ]
  }
]);

function App() {
  return (
    <div className="container-fluid p-0">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
