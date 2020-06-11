import React, { useEffect } from "react";
import { SideBarContainer, NavItem } from "../styles/SideBarStyles";
import { Text } from "../styles/GlobalStyles";
import { NavLink } from "react-router-dom";
import { GamePad, Clothing } from "../svg/Svgs";

const SideBar = () => {
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const menuItems = [
    {
      to: "/lifestyle",
      name: "Lifestyle",
      menuIcon: <Clothing color="#121212" size="30px" />,
    },
    {
      to: "/electronics",
      name: "Electronics",
      menuIcon: <GamePad color="#121212" size="30px" />,
    },
    {
      to: "/gaming",
      name: "Game and entertainment",
      menuIcon: <GamePad color="#121212" size="30px" />,
    },
    {
      to: "/home-equipment",
      name: "Home and equipment",
      menuIcon: <GamePad color="#121212" size="30px" />,
    },
  ];

  return (
    <SideBarContainer>
      <Text josefinsans>Categories</Text>
      {menuItems.map(({ to, name, menuIcon }) => (
        <NavLink key={Math.random().toString()} to={to}>
          <NavItem>
            {menuIcon}
            <Text small josfinsans>
              {name}
            </Text>
          </NavItem>
        </NavLink>
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
