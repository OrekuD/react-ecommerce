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
import { URL } from "../constants/url";

const Product = ({ location }) => {
  const [product, setProduct] = useState({});
  const { products, manageCart, getProduct } = useContext(Context);

  useEffect(() => {
    const params = queryString.parse(location.search);
    // const item = products.find((temp) => temp.id === params.id);
    console.log(`${URL}/products/${params.id}`);

    fetch(`${URL}/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
      })
      .catch((error) => console.log(error));
  }, [location.search]);

  return (
    <ProductContainer>
      <LeftContainer>
        <Text>
          <img
            src={`${URL}/${product.productImage}`}
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
          {getProduct(product) ? (
            <Button onClick={() => manageCart("REMOVE", product)}>
              <Text color="#ffffff" tiny uppercase>
                Remove from cart
              </Text>
            </Button>
          ) : (
            <Button onClick={() => manageCart("ADD", product)}>
              <Text color="#ffffff" tiny uppercase>
                Add to cart
              </Text>
            </Button>
          )}
        </Content>
      </RightContainer>
    </ProductContainer>
  );
};

export default Product;
