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
    <div className=" w-full">
      <Card key={product.id} className="bg-white p-4">
        <div>
          <div
            className={`${
              isCartClicked
                ? " border border-customRed rounded-md"
                : "  border rounded-md border-gray-300"
            }  `}
          >
            <Image
              alt={product.name}
              src={product.image.mobile}
              width={300}
              height={200}
              className="w-full md:w-full h-auto rounded-md object-cover"
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
        <CardHeader className=" p-2">
          <CardDescription>{product.category} </CardDescription>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="p-2 text-customRed text-xs">
            $ {product.price.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Products;
