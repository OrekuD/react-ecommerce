import React, { useContext } from "react";
import { Layout, Card } from "../styles/GlobalStyles";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

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
        <Card
          apparel
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
          <div id={`image-content-${product.id.slice(2, 7)}`}> Add </div>
        </Card>
      ))}
    </Layout>
  );
};

export default Products;
