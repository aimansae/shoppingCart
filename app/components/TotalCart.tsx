"use client";
import React, { useState } from "react";
import { data, DataType } from "../data";
import ProductCart from "./ProductCart";
import deleteIcon from "../../public/assets/images/icon-remove-item.svg";
import Image from "next/image";
import emptyCart from "../../public/assets/images/illustration-empty-cart.svg";
import orderConfirmation from "../../public/assets/images/icon-order-confirmed.svg";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const TotalCart = () => {
  const [cart, setCart] = useState<{
    [key: number]: { product: DataType; quantity: number };
  }>({});
  const [cartTotal, setCartTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleIncrement = (product: DataType) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = { product, quantity: 1 };
      }
      return updatedCart;
    });

    setCartTotal((prevCartTotal) => prevCartTotal + product.price);
  };

  const handleDecrement = (product: DataType) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        if (updatedCart[product.id].quantity > 1) {
          updatedCart[product.id].quantity -= 1;
        } else {
          delete updatedCart[product.id];
        }
      }
      return updatedCart;
    });

    setCartTotal((prevCartTotal) => prevCartTotal - product.price);
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

      setCartTotal((prevCartTotal) => {
        const newTotal = prevCartTotal - productPrice * productQuantity;
        return Object.keys(updatedCart).length === 0 ? 0 : newTotal;
      });

      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleModal = () => {
    setCart({});
    setCartTotal(0);
    setShowModal(false);
    router.push("/");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            count={cart[product.id]?.quantity || 0}
            onIncrement={() => handleIncrement(product)}
            onDecrement={handleDecrement}
          />
        ))}
      </div>

      {/* Card Section */}
      <Card className="bg-white shadow-lg rounded-lg flex-col justify-center text-left p-6 h-auto w-auto">
        <CardHeader>
          <CardTitle className="text-customRed text-lg font-semibold">
            Your Cart ({totalItems})
          </CardTitle>
        </CardHeader>

        {totalItems === 0 ? (
          <CardContent className="flex flex-col items-center">
            <Image src={emptyCart} alt="Empty Cart" width={150} height={150} />
            <p className="mt-4 text-sm text-gray-500">
              Your added items will appear here
            </p>
          </CardContent>
        ) : (
          <CardContent>
            <ul className="divide-y divide-gray-200">
              {Object.values(cart).map((item) => {
                const totalPerItem = item.product.price * item.quantity;
                return (
                  <li
                    key={item.product.id}
                    className="py-4 flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <Image
                        src={item.product.image.mobile}
                        width={60}
                        height={60}
                        alt="Product Image"
                        className="rounded h-full object-cover mr-3"
                      />
                      <div>
                        <h4 className="text-base font-semibold mb-1 truncate w-32 md:w-auto">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center text-neutral-500">
                          <span className="text-customRed font-semibold mr-1">
                            {item.quantity}x
                          </span>
                          <span>@ ${item.product.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-black font-semibold text-lg">
                        ${totalPerItem.toFixed(2)}
                      </span>
                      <button
                        className="mt-2 p-1 rounded-full hover:bg-gray-200"
                        onClick={() => deleteItem(item.product.id)}
                        aria-label="Delete item"
                      >
                        <Image
                          src={deleteIcon}
                          alt="Delete icon"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        )}
        {totalItems > 0 && (
          <>
            <CardFooter className="text-xs mt-4">
              <div className="flex items-center justify-between w-full">
                <p className="text-base">Order Total:</p>
                <span className="text-black text-xl font-bold">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </CardFooter>
            <button
              onClick={() => setShowModal(true)}
              className="my-4 w-full text-base font-semibold text-white bg-customRed rounded-full px-4 py-2 hover:bg-red-600 transition duration-200"
            >
              Confirm Order
            </button>
          </>
        )}
      </Card>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <Card className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4">
            <CardHeader className="p-4">
              <Image src={orderConfirmation} alt="Order confirmation icon" />
              <CardTitle className="text-xl my-2 font-semibold">
                Card Confirmed
              </CardTitle>
              <CardDescription>
                <span>We hope you enjoy your food!</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="mx-4">
              <ul>
                {Object.values(cart).map((item) => {
                  const totalPerItem = item.product.price * item.quantity;
                  return (
                    <li
                      key={item.product.id}
                      className="list-none text-sm py-4 border-b border-b-gray-200"
                    >
                      <div className="flex gap-2 justify-between items-center">
                        <Image
                          src={item.product.image.mobile}
                          width={60}
                          height={60}
                          alt="Product Image"
                          className="rounded h-full object-cover"
                        />
                        <div className="w-full">
                          <h4 className="text-base font-semibold mb-1">
                            {item.product.name}
                          </h4>
                          <div className="flex items-center text-neutral-500">
                            <span className="text-customRed font-semibold mr-1">
                              {item.quantity}x
                            </span>
                            <span>@ ${item.product.price.toFixed(2)}</span>
                          </div>
                        </div>
                        <span className="text-black font-semibold text-right">
                          ${totalPerItem.toFixed(2)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
            <CardFooter className="text-xs flex flex-col mt-4 mx-4 rounded justify-center">
              <button
                onClick={handleModal}
                className="my-4 w-full text-base font-semibold text-white bg-customRed rounded-full px-4 py-2 hover:bg-red-600 transition duration-200"
              >
                Start New Order
              </button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TotalCart;
