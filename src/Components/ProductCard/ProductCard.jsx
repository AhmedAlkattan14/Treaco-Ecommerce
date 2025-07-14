import { useContext, useState } from "react";
import { CartProvider } from "../../Context/Cart.context";
import toast from "react-hot-toast";
// import CartContext from "../../Context/Cart.context";

export default function ProductCard({ item }) {
  const { addToCart, addToFavorites } = useContext(CartProvider);

  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(1);

  return (
    <>
      <div
        onClick={() => setSelectedItem(item)}
        className="bg-white hover:-translate-y-4 duration-200 transition-all shadow-md rounded-lg overflow-hidden cursor-pointer"
      >
        <div className="h-96">
          <img
            src={item.cover}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600 line-clamp-2">{item.desc}</p>
          <p className=" font-semibold">${item.price}</p>
        </div>
      </div>
      {selectedItem && (
     <div
  className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
  onClick={() => setSelectedItem(null)} // إغلاق عند الضغط خارج المودال
>
  <div
    className="bg-white rounded-lg relative  shadow-lg w-full max-w-2xl flex flex-col md:flex-row "
    onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط داخل المودال
  >
    {/* زر الإغلاق */}
    <div
      onClick={() => setSelectedItem(null)}
      className="absolute z-50 -top-2 -right-2 flex items-center justify-center bg-white cursor-pointer size-6 rounded-full shadow"
    >
      <i className="text-md text-red-500 fa fa-times"></i>
    </div>

    {/* الصورة */}
    <div className="w-full md:w-1/2 h-72 md:h-auto">
      <img
        src={selectedItem.cover}
        alt={selectedItem.name}
        className="w-full h-full object-contain md:object-cover "
      />
    </div>

    {/* التفاصيل */}
    <div className="p-4 w-full md:w-1/2  space-y-3">
      <h2 className="text-lg font-semibold">{selectedItem.name}</h2>
      <p className="text-gray-600 text-sm">{selectedItem.desc}</p>
      <p className="text-lg font-bold">${selectedItem.price}</p>

      <p>Size</p>
      <div className="flex flex-wrap gap-2">
        {item.size.map((size, index) => (
          <button
            key={index}
            className={`${
              selectedItem.selectedSize === index
                ? "bg-black text-white"
                : "bg-white text-black"
            } border border-gray-300 px-4 py-1 rounded`}
            onClick={() =>
              setSelectedItem({ ...selectedItem, selectedSize: index })
            }
          >
            {size}
          </button>
        ))}
      </div>

      <p>Color</p>
      <div className="flex flex-wrap gap-2">
        {item.colors.map((color, index) => (
          <button
            key={index}
            className={`${
              selectedItem.selectedColor === index
                ? "bg-black text-white"
                : "bg-white text-black"
            } border border-gray-300 px-4 py-1 rounded`}
            onClick={() =>
              setSelectedItem({ ...selectedItem, selectedColor: index })
            }
          >
            {color}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-between">
        {/* عدد المنتجات */}
        <div className="flex items-center border border-gray-300 py-1 rounded">
          <button
            onClick={() => setCount(count + 1)}
            className="px-3 text-lg font-bold border-r border-gray-300"
          >
            +
          </button>
          <span className="px-4 select-none">{count}</span>
          <button
            onClick={() => setCount(count > 1 ? count - 1 : 1)}
            className="px-3 text-lg font-bold border-l border-gray-300"
          >
            −
          </button>
        </div>

        {/* زر الإضافة للسلة */}
        <button
          onClick={() => {
            toast.success("Product added to cart successfully 🎉", {
              style: { background: "green", color: "white", border: 0 },
            });
            addToCart(selectedItem, count);
          }}
          className="flex items-center border border-gray-300 py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>

      <button
        onClick={() => {
          toast.success("Product added to wishlist 💖", {
            style: { background: "green", color: "white", border: 0 },
          });
          addToFavorites(selectedItem);
        }}
        className="w-full py-2 bg-black text-white rounded"
      >
        Add to Wishlist <i className="fa fa-heart ml-1"></i>
      </button>

      <button className="w-full py-2 bg-black text-white rounded">
        View Details
      </button>
    </div>
  </div>
</div>

      )}
    </>
  );
}
