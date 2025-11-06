import { createContext, useState, useContext } from 'react'

function CartContext() {

  const CartContext = createContext();

  const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart debe estar dentro de un CartProvider");
    }
    return context;
  };

  const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
      const existingItem = cartItems.find(prod => prod.id === item.id);

      if (existingItem) {
        setCartItems(cartItems.map(prod => prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod));
      } else {
        setCartItems([...cartItems, { ...item, quantity }]);
      }
    };
  }

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(prod => prod.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, prod) => total + prod.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, prod) => total + prod.price * prod.quantity, 0);
  };

  return (
    <CartContext.Provider value = {{ cartItems, addItem, removeItem, clearCart, getTotalQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext