import React, { useContext } from "react";
import { Text } from "../styles/GlobalStyles";
import {
  Card,
  LeftContainer,
  RightContainer,
  Button,
} from "../styles/CartStyles";
import { Minus, Plus } from "../svg/Svgs";
import { Context } from "../context/context";

const CartItem = ({ item }) => {
  const { image, name, price, count, total } = item;
  const { manageCart } = useContext(Context);
  return (
    <Card>
      <LeftContainer>
        <div>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt="thumbnail"
          />
        </div>
        <Text big> {name} </Text>
      </LeftContainer>
      <RightContainer>
        <Text medium> {price} </Text>
        <div>
          <Button onClick={() => manageCart("DECREASE", item)}>
            <Minus color="#121212" size="14px" />
          </Button>
          <Text big> {count} </Text>
          <Button onClick={() => manageCart("INCREASE", item)}>
            <Plus color="#121212" size="14px" />
          </Button>
        </div>
        <Text bigger> {total} </Text>
        <Button onClick={() => manageCart("REMOVE", item)}>
          <Plus color="#121212" size="14px" />
        </Button>
      </RightContainer>
    </Card>
  );
};

export default CartItem;
