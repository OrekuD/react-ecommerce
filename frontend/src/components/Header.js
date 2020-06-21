import React, { useContext } from "react";
import {
  HeaderContainer,
  LogoSection,
  SearchToolBar,
  UserDetails,
  SearchInputContainer,
  TextInput,
  CartContainer,
  ProfileContainer,
  ProfileImage,
} from "../styles/HeaderStyles";
import { Text } from "../styles/GlobalStyles";
import { Search, ArrowDown, ShoppingCart2 } from "../svg/Svgs";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

const cart = 2;
const Header = () => {
  const { cart, darkTheme } = useContext(Context);

  return (
    <HeaderContainer>
      <LogoSection>
        <Link to="/">
          <Text uppercase josefinsans>
            ShopApp
          </Text>
        </Link>
      </LogoSection>
      <SearchToolBar>
        <SearchInputContainer>
          <Search color="grey" size="14px" />
          <TextInput placeholder="Search for items here..."></TextInput>
        </SearchInputContainer>
      </SearchToolBar>
      <UserDetails>
        <Link to="/products">
          <Text small light>
            Products
          </Text>
        </Link>
        <Link to="/cart">
          <CartContainer>
            <ShoppingCart2 color={darkTheme ? "#ffffff" : "#121212"} size="20px" />
            <Text small light>
              Cart : {cart.length}
            </Text>
          </CartContainer>
        </Link>
        <Link to="/profile">
          <ProfileContainer>
            <ProfileImage> </ProfileImage>
            <Text small light>
              Francis
            </Text>
            <ArrowDown color={darkTheme ? "#ffffff" : "#121212"} size="12px" />
          </ProfileContainer>
        </Link>
      </UserDetails>
    </HeaderContainer>
  );
};

export default Header;
