import React, { useContext } from "react";
import {
  HeaderContainer,
  UserDetails,
  CartContainer,
  ProfileContainer,
} from "../styles/HeaderStyles";
import { Text } from "../styles/GlobalStyles";
import { ShoppingCart2 } from "../svg/Svgs";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import Image from "../images/user.png";

const Header = () => {
  const { cart, darkTheme, userDetails, isLoggedIn } = useContext(Context);
  const { fullname, image } = userDetails;

  return (
    <HeaderContainer>
      <Link to="/">
        <Text uppercase josefinsans>
          ShopApp
        </Text>
      </Link>
      <UserDetails>
        <Link to="/cart">
          <CartContainer>
            <ShoppingCart2
              color={darkTheme ? "#ffffff" : "#121212"}
              size="20px"
            />
            <Text small light>
              Cart : {cart.length}
            </Text>
          </CartContainer>
        </Link>
        <Link to="/profile">
          <ProfileContainer>
            {isLoggedIn ? (
              <>
                <img src={image} alt="user" />
                <Text small light>
                  {fullname.split(" ")[0]}
                </Text>
              </>
            ) : (
              <>
                <img src={Image} alt="user" />
                <Text small light>
                  Log In
                </Text>
              </>
            )}
          </ProfileContainer>
        </Link>
      </UserDetails>
    </HeaderContainer>
  );
};

export default Header;
