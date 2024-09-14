"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { data } from "../data";
import ImageW from "../public/assets/images/image-baklava-mobile.jpg";
const TotalCart = () => {
  const [totalCount, setTotalCount] = useState(0);

  const handleUpdateCart = (change: number) => {
    setTotalCount((prevTotal) => prevTotal + change);
  };

  return (
    <div>
      {data.map((d) => (
        <Card key={d.id} className="border-transparent">
          <div className="flex flex-col items-center">
            <Image
              alt={d.name}
              src={ImageW}
              height={500}
              width={500}
              className="rounded-md  "
            />
            <AddToCart onUpdateCart={handleUpdateCart} />
          </div>
          <CardHeader>
            <CardDescription>{d.category} </CardDescription>
            <CardTitle>{d.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mt-2 text-customRed text-xs">
              $ {d.price.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      ))}
      <div>
        <p>Your cart Total ({totalCount})</p>
      </div>{" "}
    </div>
  );
};

export default TotalCart;
