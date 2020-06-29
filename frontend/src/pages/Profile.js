import React, { useContext } from "react";
import { Text } from "../styles/GlobalStyles";
import { ProfileContainer } from "../styles/ProfileStyles";
import { Context } from "../context/context";
import { Profile } from "../components";
import { SignIn } from "../pages";

const ProfilePage = () => {
  const { isLoggedIn } = useContext(Context);

  return (
    <ProfileContainer>{isLoggedIn ? <Profile /> : <SignIn />}</ProfileContainer>
  );
};

export default ProfilePage;
