"use client";
import React, { useState } from "react";
import { data, DataType } from "../data";
import ProductCart from "./ProductCart";

const TotalCart = () => {
  const [cart, setCart] = useState<{
    [key: number]: { product: DataType; quantity: number };
  }>({});
  const [cartTotal, setCartTotal] = useState(0);
  const [clickedProductId, setClickedProductId] = useState<number | null>(null); // Track clicked product

  const handleIncrement = (product: DataType) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = { product, quantity: 1 };
      }
      console.log("Updated cart after increment:", updatedCart);
      return updatedCart;
    });

    setCartTotal((prevCartTotal) => prevCartTotal + product.price);
  };

  const handleDecrement = (product: DataType) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        if (updatedCart[product.id].quantity > 1) {
          // Decrement quantity if more than 1
          updatedCart[product.id].quantity -= 1;
        } else {
          // Remove product if quantity is 1
          delete updatedCart[product.id];
        }
      }
      return updatedCart;
    });

    setCartTotal((prevCartTotal) => {
      const productPrice = product.price;
      return prevCartTotal - productPrice;
    });
  };
  const totalItems = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div>
      {data.map((product) => (
        <ProductCart
          key={product.id}
          product={product}
          count={cart[product.id]?.quantity || 0}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <div>
        <p>Total items: {totalItems}</p>
        <p>Your cart total: ${cartTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TotalCart;
