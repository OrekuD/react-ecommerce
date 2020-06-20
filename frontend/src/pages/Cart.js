import React from "react";
import { CartContainer } from "../styles/CartStyles";
import { Text } from "../styles/GlobalStyles";
import { useContext } from "react";
import { Context } from "../context/context";
import CartItem from "../components/CartItem";
import Image7 from "../images/apparel/20.jpg";
import Image8 from "../images/apparel/19.jpg";

const Cart = () => {
  const { cart } = useContext(Context);

  // const cart = [
  //   {
  //     id: Math.random().toString(),
  //     name: "Nike 7",
  //     count: 2,
  //     total: 19.98,
  //     description:
  //       "Sint incididunt anim proident magna cupidatat anim sit consequat sint dolore occaecat ea non amet.",
  //     price: 9.99,
  //     image: Image7,
  //   },
  //   {
  //     id: Math.random().toString(),
  //     name: "Nike 8",
  //     count: 2,
  //     total: 19.98,
  //     description:
  //       "Sint incididunt anim proident magna cupidatat anim sit consequat sint dolore occaecat ea non amet.",
  //     price: 39.99,
  //     image: Image8,
  //   },
  // ];

  return (
    <CartContainer>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </CartContainer>
  );
};

export default Cart;
