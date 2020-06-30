import React from "react";
import { ProfileContainer } from "../styles/ProfileStyles";
import Form from "../components/Form";

const SignUp = ({ setSignInScreen }) => {
  return (
    <ProfileContainer>
      <Form signup setSignInScreen={setSignInScreen} />
    </ProfileContainer>
  );
};

export default SignUp;
