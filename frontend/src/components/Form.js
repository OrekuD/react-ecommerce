import React, { useState, useContext } from "react";
import { FormContainer } from "../styles/ProfileStyles";
import { Text, Button } from "../styles/GlobalStyles";
import { Context } from "../context/context";
import { validateDetails } from "../util/validateDetails";

const Form = ({ signup: isSignUpPage, setSignInScreen }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signin, signup } = useContext(Context);

  const createAccount = () => {
    // setIsLoading(true);
    const userDetails = {
      fullname,
      email,
      password,
      confirmPassword,
    };

    const { isValid, message } = validateDetails(true, userDetails);
    if (!isValid) {
      alert("Invalid details", message);
      return;
    }
    signup(userDetails);
  };

  const login = () => {
    const userDetails = {
      email,
      password,
    };

    const { isValid, message } = validateDetails(false, userDetails);
    if (!isValid) {
      alert(message);
      return;
    }
  };

  return (
    <FormContainer>
      <Text bigger> {isSignUpPage ? "Sign up" : "Sign in"} </Text>
      {isSignUpPage && (
        <input
          placeholder="Full name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      )}
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        inputMode="email"
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      {isSignUpPage && (
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
      )}
      {isSignUpPage ? (
        <Button onClick={createAccount}>
          <Text invertColor> Sign up </Text>
        </Button>
      ) : (
        <Button onClick={login}>
          <Text invertColor> Sign in </Text>
        </Button>
      )}
      {isSignUpPage ? (
        <Text>
          Already have an account?
          <span onClick={() => setSignInScreen(true)}> Sign in </span>
        </Text>
      ) : (
        <Text>
          Don't have an account?
          <span onClick={() => setSignInScreen(false)}> Sign up </span>
        </Text>
      )}
    </FormContainer>
  );
};

export default Form;
