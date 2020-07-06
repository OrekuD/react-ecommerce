import React, { useContext } from "react";
import {
  CartContainer,
  CartTotalContainer,
  Content,
  CartTotalButton,
} from "../styles/CartStyles";
import { Text } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import { CartItem, CartSummary } from "../components";

const Cart = () => {
  const { cart, cartTotal, darkTheme } = useContext(Context);
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
