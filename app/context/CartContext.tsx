 "use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the cart context
interface CartContextType {
  items: Array<{ id: number; name: string; quantity: number }>;
  addItem: (item: { id: number; name: string; quantity: number }) => void;
  removeItem: (id: number) => void;
}

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Array<{ id: number; name: string; quantity: number }>>([]);

  const addItem = (item: { id: number; name: string; quantity: number }) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
