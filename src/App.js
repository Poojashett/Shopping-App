import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import ProductList from "./Components/Products/ProductList";
import Home from "./Components/Home/Home";
import HeaderCommon from "./Common/HeaderCommon";

function App() {
  const AppLayout = () => {
    const location = useLocation();
    const isHomeRoute = location.pathname === "/";
    return (
      <div>
        {!isHomeRoute && <HeaderCommon />}
        <Outlet />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "product-list",
          element: <ProductList />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
