import React, { useContext } from "react";
import { CartContainer } from "../styles/CartStyles";
import { Context } from "../context/context";
import { CartItem, CartSummary } from "../components";

const Cart = () => {
  const { cart } = useContext(Context);
  return (
    <CartContainer>
      <CartSummary />
      {cart.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </CartContainer>
  );
};

export default Cart;
