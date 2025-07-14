import { useContext } from "react";
import { CartProvider } from "../../Context/Cart.context";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

export default function Cart() {
  const { removeFromCart, clearCart } = useContext(CartProvider);
  return (
    <>
      <Helmet>
        <title>Treaco | Cart</title>
      </Helmet>
      <div className=" items-center max-w-[85rem] min-h-[70vh] mx-auto justify-center">
        <h2 className="text-2xl  w-fit mt-2 relative before:absolute before:-bottom-2 before:w-1/2 before:h-1 before:bg-gradient-to-r before:from-red-500 before:via-purple-400 before:to-blue-500 font-semibold text-gray-800 dark:text-white">
          {" "}
          Your Cart{" "}
        </h2>
        {localStorage.getItem("cart") ? (
          JSON.parse(localStorage.getItem("cart")).map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 my-4 overflow-hidden rounded-xl shadow-md sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              {/* صورة المنتج */}
              <div className="relative w-full sm:w-60 md:w-72 h-60 sm:h-auto sm:rounded-s-xl overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-contain"
                  src={item.selectedItem.cover}
                  alt={item.selectedItem.name}
                />
              </div>

              {/* محتوى المنتج */}
              <div className="flex flex-col justify-between p-5 flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.selectedItem.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-neutral-400 line-clamp-3">
                    {item.selectedItem.desc}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-neutral-400">
                    Quantity: {item.count}
                  </p>
                </div>

                {/* تفاصيل إضافية أو أزرار */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-neutral-500">
                  <span>${item.selectedItem.price}</span>
                  <span>Last updated 5 mins ago</span>
                  <button
                    className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-4 py-2 rounded"
                    onClick={() => {
                      toast.success("Item removed from cart", {
                        style: {
                          backgroundColor: "#991b1b",
                          color: "white",
                          border: 0,
                        },
                        icon: "🗑️",
                      });
                      removeFromCart(item.selectedItem);
                    }}
                  >
                    Remove from cart <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl font-semibold mt-4 bg-white border border-gray-200 shadow rounded-2xl p-4 my-4 flex flex-col items-center justify-center min-h-96">
            <h1>
              {" "}
              ooops , Your cart is empty <i>👀</i>
            </h1>
            <Link
              to="/"
              className="bg-blue-600 text-sm hover:bg-blue-700 cursor-pointer text-white mt-2 px-4 py-2 rounded ml-4"
            >
              Go to Shop
            </Link>
          </div>
        )}
        {localStorage.getItem("cart") &&
          JSON.parse(localStorage.getItem("cart")).length > 0 && (
            <div className="flex justify-between mb-4">
              <p className="text-lg py-3 text-end font-semibold">
                Total Price :{" "}
                {JSON.parse(localStorage.getItem("cart"))
                  ? JSON.parse(localStorage.getItem("cart"))
                      .reduce(
                        (acc, item) =>
                          acc + item.count * item.selectedItem.price,
                        0
                      )
                      .toFixed(2)
                  : "0.00"}
                $
              </p>
              <button
                className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-4 py-2 rounded"
                onClick={() => {
                  if (window.confirm("Are you sure?")) {
                    clearCart();
                    toast.success("Cart cleared successfully");
                  }
                }}
              >
                Clear Cart <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          )}
      </div>
    </>
  );
}
