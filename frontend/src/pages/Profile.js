import React, { useContext } from "react";
import { ProfileContainer } from "../styles/ProfileStyles";
import { Context } from "../context/context";
import { Profile } from "../components";
import { SignIn, Auth } from "../pages";
import SignUp from "./SignUp";

const ProfilePage = ({ history }) => {
  const { isLoggedIn } = useContext(Context);

  return (
    <ProfileContainer>{isLoggedIn ? <Profile /> : <Auth />}</ProfileContainer>
  );
};

export default ProfilePage;
