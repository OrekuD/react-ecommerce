import React, { useContext } from "react";
import {
  ProfileContainer,
  ProfileContentLeft,
  ProfileContentRight,
  SectionHeader,
  Group,
} from "../styles/ProfileStyles";
import { Text, Button } from "../styles/GlobalStyles";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

const Profile = () => {
  const { userDetails, logout, cart } = useContext(Context);
  const { fullname, image, email } = userDetails;
  return (
    <ProfileContainer>
      <ProfileContentLeft>
        <>
          <img src={require("../images/user.png")} alt="user" />
        </>
        <div>
          <div>
            <Text huge> {fullname} </Text>
            <Text color="grey"> {email} </Text>
          </div>
          <div>
            <Text> Dark theme </Text>
          </div>
        </div>
      </ProfileContentLeft>
      <ProfileContentRight>
        <Group>
          <SectionHeader>
            <Text color="#ffffff"> Cart </Text>
          </SectionHeader>
          {cart.length === 0 ? (
            <Text>Your cart is empty. Add items to see cart summary here</Text>
          ) : (
            <CartSummary />
          )}
        </Group>
        <Group bottom>
          <SectionHeader>
            <Text color="#ffffff"> Wishlist </Text>
          </SectionHeader>
          {cart.length === 0 ? (
            <Text>Your wishlist is empty. Add items to see them here</Text>
          ) : (
            <CartSummary />
          )}
        </Group>
      </ProfileContentRight>
    </ProfileContainer>
  );
};

export default Profile;
