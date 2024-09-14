"use client";

import React, { useState } from "react";
import Image from "next/image";
import Icon from "../public/assets/images/icon-add-to-cart.svg";
import incrementIcon from "../public/assets/images/icon-increment-quantity.svg";
import decrementIcon from "../public/assets/images/icon-decrement-quantity.svg";

type AddToCartProps = {
  onUpdateCart: (change: number) => void;
};

const AddToCart = ({ onUpdateCart }: AddToCartProps) => {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      onUpdateCart(1);
      return newCount;
    });
  };
  const decrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      onUpdateCart(newCount);
      return newCount;
    });
  };

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
            onClick={decrement}
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
            onClick={increment}
            className="flex items-center border rounded-full p-1" // Adjust padding for consistency
          >
            <Image
              src={incrementIcon}
              alt="Increment icon"
              width={8} // Same size as the decrement icon
              height={8}
            />
          </button>
        </div>
      )}
    </div>
  );
};
export default AddToCart;
