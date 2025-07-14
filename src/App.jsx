import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import CartContext from "./Context/Cart.context";
import Cart from "./Pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import Favorites from "./Pages/Favorites/Favorites";
import NotFound from "./Pages/NotFound/NotFound";

async function loadPreline() {
  return import("preline/dist/index.js");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();

      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [location.pathname]);

  return (
    <>
      <CartContext>
        <RouterProvider router={router}></RouterProvider>
        <Toaster toastOptions={{ duration: 2000 }} position="top-right" />
      </CartContext>
    </>
  );
}

export default App;
