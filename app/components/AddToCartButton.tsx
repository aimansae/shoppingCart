"use client";

import React, { useState } from "react";
import Image from "next/image";
import Icon from "../../public/assets/images/icon-add-to-cart.svg";
import incrementIcon from "../../public/assets/images/icon-increment-quantity.svg";
import decrementIcon from "../../public/assets/images/icon-decrement-quantity.svg";
import { DataType } from "../data";
type Props = {
  id: number;
  product: DataType;
  count: number;
  onIncrement: (product: DataType) => void;
  onDecrement: (product: DataType) => void;
};

const AddToCartButton = ({
  count,
  product,
  onIncrement,
  onDecrement,
}: Props) => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  return (
    <div>
      {!isCartClicked ? (
        <div className="  flex flex-row items-center   relative top-[-20px] ">
          <button
            onClick={() => setIsCartClicked(true)}
            className="flex items-center  py-2 px-4  rounded-2xl bg-white border border-gray-400 "
          >
            <Image
              src={Icon}
              alt="cart icon"
              className="mr-1"
              width={14}
              height={14}
            />
            <p className="text-xs font-semibold">Add to Cart</p>
          </button>
        </div>
      ) : (
        <div className=" relative top-[-20px] flex flex-row items-center bg-customRed gap-4 py-[10px] px-[20px] text-white  rounded-xl ">
          <button
            onClick={() => onDecrement(product)}
            disabled={count === 0}
            className="flex items-center border rounded-full px-[4px] py-[7px]"
          >
            <Image
              src={decrementIcon}
              alt="Decrement icon"
              width={8}
              height={8}
            />
          </button>
          <span className="text-xs font-semibold">{count}</span>
          <button
            onClick={() => onIncrement(product)}
            className="flex items-center border rounded-full p-1" // Adjust padding for consistency
          >
            <Image
              src={incrementIcon}
              alt="Increment icon"
              width={8}
              height={8}
            />
          </button>
        </div>
      )}
    </div>
  );
};
export default AddToCartButton;
