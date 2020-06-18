import React from "react";
import { HomeContainer } from "../styles/HomeStyles";
import { Card } from "../styles/GlobalStyles";
import { Banner } from "../components";

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <Card> </Card>
      <Card> </Card>
      <Card> </Card>
    </HomeContainer>
  );
};

export default Home;
