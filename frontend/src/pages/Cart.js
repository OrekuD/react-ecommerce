import React, { useEffect } from "react";
import gsap from "gsap";

const Cart = () => {
  const enterAnimation = () => {
    gsap.to("#side-bar", {
      duration: 1,
      x: -400,
      stagger: {
        amount: 0.1,
      },
    });
  };

  const exitAnimation = () => {
    gsap.to("#side-bar", {
      duration: 1,
      x: 0,
      stagger: {
        amount: 0.1,
      },
    });
  };

  useEffect(() => {
    enterAnimation();

    return () => {
      exitAnimation();
    };
  });

  return <div> Cart </div>;
};

export default Cart;
