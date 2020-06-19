import React, { useState, useEffect, useContext } from "react";
import queryString from "query-string";
import { Context } from "../context/context";
import { Text } from "../styles/GlobalStyles";
import {
  ProductContainer,
  LeftContainer,
  RightContainer,
  Title,
  Content,
  ContentTop,
  Button,
} from "../styles/ProductStyles";
import Image7 from "../images/apparel/21.jpg";

const Product = ({ location }) => {
  const [product, setProduct] = useState({});
  const { products } = useContext(Context);

  useEffect(() => {
    const data = queryString.parse(location.search);
    const item = products.find((temp) => temp.id === data.id);
    // const item = {
    //   id: Math.random().toString(),
    //   name: "Nike 7",
    //   description:
    //     "pariatur do ad mollit. Officia nulla nostrud eu in nisi officia velit elit nulla enim exercitation. Exercitation nostrud ut laboris pariatur velit. Est esse excepteur magna est. Pariatur id commodo ad aliquip exercitation esse aute deserunt adipisicing irure do enim. Enim incididunt mollit consectetur id cillum tempor occaecat ut ullamco ad aliquip sit.",
    //   price: 9.99,
    //   image: Image7,
    // };
    setProduct(item);
  }, [location.search]);

  return (
    <ProductContainer>
      <LeftContainer>
        <Text>
          <img
            src={product.image}
            alt="product-image"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Text>
      </LeftContainer>
      <RightContainer>
        <Title>
          <Text color="#6F0000"> About product </Text>
        </Title>
        <Content>
          <ContentTop>
            <Text bigger> {product.name} </Text>
            <Text bigger> {product.price} </Text>
          </ContentTop>
          <Text> {product.description} </Text>
          <Button>
            <Text color="#ffffff" tiny uppercase>
              Add to cart
            </Text>
          </Button>
        </Content>
      </RightContainer>
    </ProductContainer>
  );
};

export default Product;
