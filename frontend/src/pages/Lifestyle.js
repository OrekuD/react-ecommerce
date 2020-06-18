import React from "react";
import { Layout, Card } from "../styles/GlobalStyles";
import { products } from "../dummy-data";
import gsap from "gsap";

const Lifestyle = () => {
  const zoomIn = (id) => {
    const tl = gsap.timeline();
    tl.to(`#image-${id.slice(2, 5)}`, {
      duration: 0.6,
      scale: 1.1,
    });
  };

  const zoomOut = (id) => {
    const tl = gsap.timeline();
    tl.to(`#image-${id.slice(2, 5)}`, {
      duration: 0.6,
      scale: 1,
    });
  };

  return (
    <Layout>
      {products.map((product) => (
        <Card
          apparel
          onMouseEnter={() => zoomIn(product.id)}
          onMouseLeave={() => zoomOut(product.id)}
          key={product.id}
        >
          <img
            id={`image-${product.id.slice(2, 5)}`}
            src={product.image}
            alt="product"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Card>
      ))}
    </Layout>
  );
};

export default Lifestyle;
