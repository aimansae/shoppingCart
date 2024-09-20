import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import { DataType } from "../data";
import Image from "next/image";

import emptyCart from "../../public/assets/images/illustration-empty-cart.svg";
import deleteIcon from "../../public/assets/images/icon-remove-item.svg";

type CartSummaryProps = {
  cart: { [key: number]: { product: DataType; quantity: number } };
  cartTotal: number;
  totalItems: number;
  onDeleteItem: (productId: number) => void;
  onConfirmOrder: () => void;
};

const CartSummary = ({
  cart,
  cartTotal,
  totalItems,
  onDeleteItem,
  onConfirmOrder,
}: CartSummaryProps) => {
  return (
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
                      onClick={() => onDeleteItem(item.product.id)}
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
            onClick={onConfirmOrder}
            className="my-4 w-full text-base font-semibold text-white bg-customRed rounded-full px-4 py-2 hover:bg-red-600 transition duration-200"
          >
            Confirm Order
          </button>
        </>
      )}
    </Card>
  );
};

export default CartSummary;
