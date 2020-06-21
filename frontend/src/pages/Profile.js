import React from "react";
import { Text } from "../styles/GlobalStyles";
import {
  ProfileContainer,
  LeftContainer,
  RightContainer,
} from "../styles/ProfileStyles";
import Image from "../images/4.jpg";

const Profile = () => {
  return (
    <ProfileContainer>
      <LeftContainer>
        <img
          alt="thumbnail"
          src={Image}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </LeftContainer>
      <RightContainer> j </RightContainer>
    </ProfileContainer>
  );
};

export default Profile;
