import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
// import ImageW from "../public/assets/images/image-baklava-mobile.jpg";
import { DataType } from "../data";
type ProductCardType = {
  product: DataType;
  count: number;
  onIncrement: (product: DataType) => void;
  onDecrement: (product: DataType) => void;
};
const CartItem = ({
  product,
  count,
  onIncrement,
  onDecrement,
}: ProductCardType) => {
  return (
    <>
      <Card key={product.id} className="">
        <div className="flex flex-col items-center">
          <Image
            alt={product.name}
            src={product.image.mobile}
            height={500}
            width={500}
            className={`rounded-md ${""}`}
          />
          <AddToCartButton
            product={product}
            id={product.id}
            onIncrement={() => onIncrement(product)}
            onDecrement={onDecrement}
            count={count}
          />
        </div>
        <CardHeader>
          <CardDescription>{product.category} </CardDescription>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-2 text-customRed text-xs">
            $ {product.price.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default CartItem;
