import { createContext, useEffect, useState } from "react";

export const CartProvider = createContext();
export default function CartContext({ children }) {
  const [cartLength, setCartLength] = useState(0);
  const [favoritesLength, setFavoritesLength] = useState(0);

  // ! Set cart length
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (Array.isArray(storedCart)) {
      setCartLength(storedCart.length);
    }

    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (Array.isArray(storedFavorites)) {
      setFavoritesLength(storedFavorites.length);
    }
  }, []);

  // * Add to cart
  function addToCart(selectedItem, count = 1) {
    if (!selectedItem || !selectedItem.id || count <= 0) return;

    // Safe parse
    let cart = [];
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (Array.isArray(storedCart)) {
        cart = storedCart;
      }
    } catch (err) {
      console.error("Error parsing cart:", err);
    }

    // Check for existing item
    const existingItem = cart.find(
      (c) => c.selectedItem && c.selectedItem.id === selectedItem.id
    );

    if (existingItem) {
      existingItem.count += count;
    } else {
      cart.push({ selectedItem, count });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartLength(cart.length);
  }
  // * End add to cart
  // & clear cart
  function clearCart() {
    localStorage.removeItem("cart");
    setCartLength(0);
  }
  // & End clear cart
  // * Remove from cart
  function removeFromCart(selectedItem) {
    if (!selectedItem || !selectedItem.id) return;
    let cart = [];
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (Array.isArray(storedCart)) {
        cart = storedCart;
      }
    } catch (err) {
      console.error("Error parsing cart:", err);
    }
    const index = cart.findIndex(
      (c) => c.selectedItem && c.selectedItem.id === selectedItem.id
    );
    if (index !== -1) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartLength(cart.length);
    }
  }
  // * End remove from cart

  // ! add to favorites
  function addToFavorites(selectedItem) {
    if (!selectedItem || !selectedItem.id) return;
    let favorites = [];
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
      if (Array.isArray(storedFavorites)) {
        favorites = storedFavorites;
      }
    } catch (err) {
      console.error("Error parsing favorites:", err);
    }
    if (favorites.some((fav) => fav.id === selectedItem.id)) return;
    favorites.push(selectedItem);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoritesLength(favorites.length);
  }
  // ! End add to favorites

  // * Remove from favorites
  function removeFromFavorites(selectedItem) {
    if (!selectedItem || !selectedItem.id) return;
    let favorites = [];
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
      if (Array.isArray(storedFavorites)) {
        favorites = storedFavorites;
      }
    } catch (err) {
      console.error("Error parsing favorites:", err);
    }
    const index = favorites.findIndex((c) => c.id === selectedItem.id);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavoritesLength(favorites.length);
    }
  }
  // * End remove from favorites

  return (
    <CartProvider.Provider
      value={{
        addToCart,
        cartLength,
        clearCart,
        removeFromCart,
        addToFavorites,
        favoritesLength,
        removeFromFavorites,
      }}
    >
      {children}
    </CartProvider.Provider>
  );
}
