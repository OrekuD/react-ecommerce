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
import { Search, ShoppingCart, ArrowDown } from "../svg/Svgs";

const cart = 2;
const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Text uppercase josefinsans>
          ShopApp
        </Text>
      </LogoSection>
      <SearchToolBar>
        <SearchInputContainer>
          <Search color="grey" size="14px" />
          <TextInput placeholder="Search for items here..."></TextInput>
        </SearchInputContainer>
      </SearchToolBar>
      <UserDetails>
        <CartContainer>
          <ShoppingCart color="#121212" size="20px" />
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
