import React from "react";
import { ProfileContainer } from "../styles/ProfileStyles";
import Form from "../components/Form";

const SignIn = ({ setSignInScreen }) => {
  return (
    <ProfileContainer>
      <Form setSignInScreen={setSignInScreen} />
    </ProfileContainer>
  );
};

export default SignIn;
