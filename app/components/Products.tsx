import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { DataType } from "../data";
import { useState } from "react";

type ProductCardType = {
  product: DataType;
  count: number;
  onIncrement: () => void;
  onDecrement: (product: DataType) => void;
};

const Products = ({
  product,
  count,
  onIncrement,
  onDecrement,
}: ProductCardType) => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  const handleCartClick = (clicked: boolean) => {
    setIsCartClicked(clicked);
  };
  return (
    <>
      <Card key={product.id}>
        <div className="flex flex-col items-center">
          <div
            className={`${
              isCartClicked
                ? " border border-customRed rounded-md"
                : "relative inline-block border rounded-md border-gray-300"
            }`}
          >
            <Image
              alt={product.name}
              src={product.image.mobile}
              height={500}
              width={500}
              className="rounded-md"
            />
          </div>
          <AddToCartButton
            product={product}
            id={product.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            count={count}
            onCartClick={handleCartClick}
          />
        </div>
        <CardHeader>
          <CardDescription>{product.category} </CardDescription>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="my-2 text-customRed text-xs">
            $ {product.price.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default Products;
