import React from "react";
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

const cart = 2;
const Header = () => {
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
        <CartContainer>
          <ShoppingCart2 color="#121212" size="20px" />
          <Text small light>
            Cart : {cart}
          </Text>
        </CartContainer>
        <ProfileContainer>
          <ProfileImage> </ProfileImage>
          <Text small light>
            Francis
          </Text>
          <ArrowDown color="#121212" size="12px" />
        </ProfileContainer>
      </UserDetails>
    </HeaderContainer>
  );
};

export default Header;
