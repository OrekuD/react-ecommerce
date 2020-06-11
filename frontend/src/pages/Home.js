import React, { useEffect } from "react";
import { Text } from "../styles/GlobalStyles";
import { HomeContainer, Card } from "../styles/HomeStyles";
import gsap from "gsap";

const Home = () => {
  const enterAnimation = () => {
    gsap.from("#home", {
      duration: 1,
      ease: "power3.out",
      scale: 0.8,
      stagger: {
        amount: 0.5,
      },
    });
  };

  useEffect(() => {
    enterAnimation();
  });
  return (
    <>
      <HomeContainer>
        <Card id="home" big></Card>
        <Card> </Card>
        <Card> </Card>
        <Card> </Card>
      </HomeContainer>
    </>
  );
};

export default Home;
