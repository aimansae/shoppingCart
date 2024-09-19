"use client";
import React, { useState } from "react";
import { data, DataType } from "../data";
import ProductCart from "./ProductCart";
import deleteIcon from "../../public/assets/images/icon-remove-item.svg";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const TotalCart = () => {
  const [cart, setCart] = useState<{
    [key: number]: { product: DataType; quantity: number };
  }>({});
  const [cartTotal, setCartTotal] = useState(0);

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
  const deleteItem = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const productPrice = updatedCart[productId]?.product.price || 0;
      const productQuantity = updatedCart[productId]?.quantity || 0;

      // Update cart total
      setCartTotal((prevCartTotal) => {
        const newTotal = prevCartTotal - productPrice * productQuantity;

        return Object.keys(updatedCart).length === 0 ? 0 : newTotal;
      });

      // Remove the item from the cart
      delete updatedCart[productId];
      return updatedCart;
    });
  };
  return (
    <div className="grid grid-flow-cols-1 md:grid-cols-3">
      {data.map((product) => (
        <ProductCart
          key={product.id}
          product={product}
          count={cart[product.id]?.quantity || 0}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}

      <Card className="flex bg-white flex-col justify-center text-left p-4">
        <CardHeader>
          <CardTitle className="text-customRed ">
            Your Cart ({totalItems})
          </CardTitle>
        </CardHeader>
        <CardContent className="border-b">
          <ul className="">
            {Object.values(cart).map((item) => {
              const totalPerItem = item.product.price * item.quantity;
              return (
                <li
                  key={item.product.id}
                  className="list-none text-sm py-4 border-b border-b-gray-200 "
                >
                  <h4 className="text-base font-semibold mb-2">
                    {item.product.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-customRed font-semibold mr-3">
                        {item.quantity}x
                      </span>
                      <div className="text-neutral-500 dark:text-neutral-400">
                        <span className="mr-2">
                          @ ${item.product.price.toFixed(2)}
                        </span>
                        <span>${totalPerItem.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      className=" p-1 cursor-pointer hover:border hover:border-gray-300 hover:rounded-full"
                      onClick={() => deleteItem(item.product.id)}
                      aria-label="Delete item"
                    >
                      <Image
                        src={deleteIcon}
                        alt="Delete icon"
                        width={10}
                        height={10}
                      />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between text-xs my-4">
          Order Total:
          <span className="text-black font-bold">${cartTotal.toFixed(2)}</span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TotalCart;
