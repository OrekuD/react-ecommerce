import React, { useContext } from "react";
import { CartContainer, CartTotalContainer, Content, CartTotalButton } from "../styles/CartStyles";
import { Text } from "../styles/GlobalStyles";
import { Link } from "react-router-dom"
import { Context } from "../context/context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, cartTotal, darkTheme } = useContext(Context);
  return (
    <CartContainer>
      <CartTotalContainer>
        <Content>
          <Text bigger color={darkTheme ? "#000000" : "#ffffff"} > {cartTotal} </Text>
          <Link to="/checkout" >
            <CartTotalButton>
              <Text color="#ffffff" > Checkout </Text>
            </CartTotalButton>
          </Link>
        </Content>
      </CartTotalContainer>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </CartContainer>
  );
};

export default Cart;
