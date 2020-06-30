import React, { useContext } from "react";
import { Layout } from "../styles/GlobalStyles";
import { ProductCard, Button, Content } from "../styles/ProductsStyles";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import { Ellipsis } from "react-spinners-css";
import { Heart2, Plus, Minus } from "../svg/Svgs";
import { URL } from "../constants/url";

const Products = () => {
  const { products, manageCart, getProduct } = useContext(Context);

  const zoomIn = (id) => {
    if (window.innerWidth <= 1024) {
      return;
    }
    const tl = gsap.timeline();
    tl.to(`#image-${id.slice(2, id.length - 1)}`, {
      duration: 0.6,
      scale: 1.15,
    }).to(`#image-content-${id.slice(2, id.length - 1)}`, {
      duration: 0.6,
      delay: -0.6,
      y: -60,
    });
  };

  const zoomOut = (id) => {
    if (window.innerWidth <= 1024) {
      return;
    }
    const tl = gsap.timeline();
    tl.to(`#image-${id.slice(2, id.length - 1)}`, {
      duration: 0.6,
      scale: 1,
    }).to(`#image-content-${id.slice(2, id.length - 1)}`, {
      duration: 0.6,
      delay: -0.6,
      y: 5,
    });
  };

  if (products.length <= 0) {
    return (
      <Layout>
        <Ellipsis color="#be97e8" size={50} />
      </Layout>
    );
  }

  return (
    <Layout>
      {products.map((product) => (
        <ProductCard
          onMouseEnter={() => zoomIn(product._id)}
          onMouseLeave={() => zoomOut(product._id)}
          key={product._id}
        >
          <Link
            to={`/product?id=${product._id}`}
            style={{ height: "100%", width: "100%" }}
          >
            <img
              id={`image-${product._id.slice(2, product._id.length - 1)}`}
              src={`${URL}/${product.productImage}`}
              alt="product"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Link>
          <Content
            id={`image-content-${product._id.slice(2, product._id.length - 1)}`}
          >
            <Button onClick={() => manageCart("REMOVE", product)}>
              <Heart2 color="#121212" size="16px" />
            </Button>
            {getProduct(product) ? (
              <Button onClick={() => manageCart("REMOVE", product)}>
                <Minus color="#121212" size="14px" />
              </Button>
            ) : (
              <Button onClick={() => manageCart("ADD", product)}>
                <Plus color="#121212" size="14px" />
              </Button>
            )}
          </Content>
        </ProductCard>
      ))}
    </Layout>
  );
};

export default Products;
