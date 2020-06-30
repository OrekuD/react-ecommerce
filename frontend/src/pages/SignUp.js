import React from "react";
import { ProfileContainer } from "../styles/ProfileStyles";
import Form from "../components/Form";

const SignUp = ({ history }) => {
  return (
    <ProfileContainer>
      <Form signup history={history} />
    </ProfileContainer>
  );
};

export default SignUp;
