import React, { useContext } from "react";
import { ProfileContainer, ProfileContent } from "../styles/ProfileStyles";
import { Text, Button } from "../styles/GlobalStyles";
import { Context } from "../context/context";
import { Link } from "react-router-dom";

const Profile = () => {
  const { userDetails, logout } = useContext(Context);
  const { fullname, image } = userDetails;
  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={image} alt="user" />
        <Text huge> {fullname} </Text>
        <Link to="/cart">
          <Text> My cart </Text>
        </Link>
        <Link to="/wishlist">
          <Text> My wishlist </Text>
        </Link>
        <Button onClick={logout}> Logout </Button>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
