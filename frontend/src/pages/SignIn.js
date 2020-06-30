import React from "react";
import { ProfileContainer } from "../styles/ProfileStyles";
import Form from "../components/Form";

const SignIn = ({ history }) => {
  return (
    <ProfileContainer>
      <Form history={history} />
    </ProfileContainer>
  );
};

export default SignIn;
