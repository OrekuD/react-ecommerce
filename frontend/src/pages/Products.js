import React, { useContext } from "react";
import { Layout, Text } from "../styles/GlobalStyles";
import { ProductCard, Button, Content } from "../styles/ProductsStyles";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import { Heart2 } from "../svg/Svgs";

const Products = () => {
  const { products } = useContext(Context);

  const zoomIn = (id) => {
    const tl = gsap.timeline();
    tl.to(`#image-${id.slice(2, 7)}`, {
      duration: 0.6,
      scale: 1.1,
    }).to(`#image-content-${id.slice(2, 7)}`, {
      duration: 0.6,
      delay: -0.6,
      y: -60,
    });
  };

  const zoomOut = (id) => {
    const tl = gsap.timeline();
    tl.to(`#image-${id.slice(2, 7)}`, {
      duration: 0.6,
      scale: 1,
    }).to(`#image-content-${id.slice(2, 7)}`, {
      duration: 0.6,
      delay: -0.6,
      y: 5,
    });
  };

  return (
    <Layout>
      {products.map((product) => (
        <ProductCard
          onMouseEnter={() => zoomIn(product.id)}
          onMouseLeave={() => zoomOut(product.id)}
          key={product.id}
        >
          <Link
            to={`/product?id=${product.id}`}
            style={{ height: "100%", width: "100%" }}
          >
            <img
              id={`image-${product.id.slice(2, 7)}`}
              src={product.image}
              alt="product"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Link>
          <Content id={`image-content-${product.id.slice(2, 7)}`}>
            <Button>
              <Heart2 color="#121212" size="16px" />
            </Button>
            <Button> sd </Button>
          </Content>
        </ProductCard>
      ))}
    </Layout>
  );
};

export default Products;
