import React from "react";
import { Link } from "react-router-dom";
import { FormContainer } from "../styles/ProfileStyles";
import { Text, Button } from "../styles/GlobalStyles";

const Form = ({ signup }) => {
  return (
    <FormContainer>
      <Text bigger> {signup ? "Sign up" : "Sign in"} </Text>
      {signup && <input placeholder="Full name" required inputMode="email" />}
      <input placeholder="Email" required inputMode="email" />
      <input placeholder="Password" required />
      {signup && <input placeholder="Confirm Password" required />}
      <Button>
        {signup ? (
          <Text invertColor> Sign up </Text>
        ) : (
          <Text invertColor> Sign in </Text>
        )}
      </Button>
      {signup ? (
        <Text>
          Already have an account? <Link to="/signin"> Sign in </Link>
        </Text>
      ) : (
        <Text>
          Don't have an account? <Link to="/signup"> Sign up </Link>
        </Text>
      )}
    </FormContainer>
  );
};

export default Form;
