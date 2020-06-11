import React from "react";
import { SideBarContainer } from "../styles/SideBarStyles";
import { Text } from "../styles/GlobalStyles";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Text josefinsans>Categories</Text>
      <NavLink to="/lifestyle">
        <Text small josfinsans>
          Lifestyle
        </Text>
      </NavLink>
      <NavLink to="/electronics">
        <Text small josfinsans>
          Electronics
        </Text>
      </NavLink>
      <NavLink to="/game">
        <Text small josfinsans>
          Game and entertainment
        </Text>
      </NavLink>
      <NavLink to="/home-equipment">
        <Text small josfinsans>
          Lifestyle
        </Text>
      </NavLink>
    </SideBarContainer>
  );
};

export default SideBar;
