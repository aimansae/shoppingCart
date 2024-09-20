"use client";
import React, { useState } from "react";
import { data, DataType } from "../data";
import Products from "./Products";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import CartSummary from "./CartSummary";

const Order = () => {
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
        {/* Products Summary */}

        {data.map((product) => (
          <Products
            key={product.id}
            product={product}
            count={cart[product.id]?.quantity || 0}
            onIncrement={() => handleIncrement(product)}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
      {/* Cart Summary */}

      <CartSummary
        cart={cart}
        cartTotal={cartTotal}
        totalItems={totalItems}
        onDeleteItem={deleteItem}
        onConfirmOrder={() => {
          setShowModal(true);
        }}
      />
      {/* Modal */}

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={handleModal}
          cart={cart}
          cartTotal={cartTotal}
        ></Modal>
      )}
    </div>
  );
};

export default Order;
