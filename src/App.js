import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Header from "./component/Header";
import ErrorPage from "./pages/ErrorPage";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/detail/*",
    element: <Detail/>,
  },
]);

function App() {
  return (
    <div className="container-fluid p-0">
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
