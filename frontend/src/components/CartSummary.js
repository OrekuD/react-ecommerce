import React, { useContext } from "react";
import {
  CartTotalContainer,
  Content,
  CartTotalButton,
} from "../styles/CartStyles";
import { Text } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

const CartSummary = () => {
  const { cartTotal, darkTheme } = useContext(Context);

  return (
    <CartTotalContainer>
      <Content>
        <Text bigger color={darkTheme ? "#000000" : "#ffffff"}>
          {cartTotal}
        </Text>
        <Link to="/checkout">
          <CartTotalButton>
            <Text color="#ffffff"> Checkout </Text>
          </CartTotalButton>
        </Link>
      </Content>
    </CartTotalContainer>
  );
};

export default CartSummary;
