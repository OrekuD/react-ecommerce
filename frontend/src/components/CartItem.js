import React, { useContext } from "react";
import { Text } from "../styles/GlobalStyles";
import {
  Card,
  LeftContainer,
  RightContainer,
  Button,
} from "../styles/CartStyles";
import { Minus, Plus, Cancel } from "../svg/Svgs";
import { Context } from "../context/context";
import { URL } from "../constants/url";

const CartItem = ({ item }) => {
  const { productImage, name, price, count, total } = item;
  const { manageCart, darkTheme } = useContext(Context);
  return (
    <Card>
      <LeftContainer>
        <div>
          <img
            src={`${URL}/${productImage}`}
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
            <Minus color="#D3781F" size="14px" />
          </Button>
          <Text big> {count} </Text>
          <Button onClick={() => manageCart("INCREASE", item)}>
            <Plus color="#D3781F" size="14px" />
          </Button>
        </div>
        <Text bigger> {total} </Text>
        <Button onClick={() => manageCart("REMOVE", item)}>
          <Cancel color={darkTheme ? "#89AF90" : "#AD0000"} size="14px" />
        </Button>
      </RightContainer>
    </Card>
  );
};

export default CartItem;
