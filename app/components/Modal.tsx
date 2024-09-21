import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";

import orderConfirmation from "../../public/assets/images/icon-order-confirmed.svg";
import { DataType } from "../data";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cart: { [key: number]: { product: DataType; quantity: number } };
  cartTotal: number;
};
const Modal = ({ isOpen, onClose, cart, cartTotal }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <Card className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4">
        <CardHeader className="p-4">
          <Image src={orderConfirmation} alt="Order confirmation icon" />
          <CardTitle className="text-xl my-2 font-semibold">
            Order Confirmed
          </CardTitle>
          <CardDescription>
            <span>We hope you enjoy your food!</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-8">
          <ul>
            {Object.values(cart).map((item) => {
              const totalPerItem = item.product.price * item.quantity;
              return (
                <>
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
                </>
              );
            })}
          </ul>
          <div className="flex my-6 items-center justify-between w-full">
            <span className="text-black text-xl font-bold">Total order:</span>
            <span className="text-black text-xl font-bold">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
        </CardContent>
        <CardFooter className="text-xs flex flex-col mt-4 mx-4 rounded justify-center">
          <button
            onClick={onClose}
            className="my-4 w-full text-base font-semibold text-white bg-customRed rounded-full px-4 py-2 hover:bg-red-600 transition duration-200"
          >
            Start New Order
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Modal;
