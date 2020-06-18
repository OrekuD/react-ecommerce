import React from "react";
import { Link } from "react-router-dom";
import { Card, Text } from "../styles/GlobalStyles";
import { BannerContainer } from "../styles/BannerStyles";
import Image from "../images/apparel/nike.jpg";
import gsap from "gsap";

const Banner = () => {
  const zoomIn = () => {
    const tl = gsap.timeline();
    tl.to("#banner-image", {
      duration: 0.6,
      scale: 1.1,
    });
  };

  const zoomOut = () => {
    const tl = gsap.timeline();
    tl.to("#banner-image", {
      duration: 0.6,
      scale: 1,
    });
  };

  return (
    <BannerContainer onMouseEnter={zoomIn} onMouseLeave={zoomOut}>
      <div>
        <img
          id="banner-image"
          src={Image}
          alt="thumbnail"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
      </div>
      <span>
        <Text uppercase bigger>
          New releases
        </Text>
        <Link to="/products">
          <div>
            <Text> Shop now </Text>
          </div>
        </Link>
      </span>
    </BannerContainer>
  );
};

export default Banner;
