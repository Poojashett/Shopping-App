import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import ProductList from "./Components/Products/ProductList";
import Home from "./Components/Home/Home";
import HeaderCommon from "./Common/HeaderCommon";
import Footer from "./Common/Footer";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import Cart from "./Components/Cart/Cart";

function App() {
  const scrollToFooter = () => {
    const footerSection = document.getElementById("footer-section");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Footer not found"); 
    }
  };

  const AppLayout = () => {
    const location = useLocation();
    const isHomeRoute = location.pathname === "/";
    return (
      <div>
        {!isHomeRoute && <HeaderCommon />}
        <Outlet />
        <Footer id="footer-section" />
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
          element: <Home scrollToFooter={scrollToFooter} />,
        },
        {
          path: "product-list/:category",
          element: <ProductList />,
        },
        {
          path: "product-display/:id",
          element: <ProductDisplay />,
        },
        {
          path: "cart",
          element: <Cart/>,
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
