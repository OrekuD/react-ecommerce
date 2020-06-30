import React, { useContext } from "react";
import { ProfileContainer } from "../styles/ProfileStyles";
import { Context } from "../context/context";
import { Profile } from "../components";
import { SignIn } from "../pages";

const ProfilePage = ({ history }) => {
  const { isLoggedIn } = useContext(Context);

  return (
    <ProfileContainer>{isLoggedIn ? <Profile /> : <SignIn />}</ProfileContainer>
  );
};

export default ProfilePage;
