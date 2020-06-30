import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FormContainer } from "../styles/ProfileStyles";
import { Text, Button } from "../styles/GlobalStyles";
import { Context } from "../context/context";

const Form = ({ signup: isSignUpPage, history }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signin, signup } = useContext(Context);

  const createAccount = () => {
    const userDetails = {
      fullname,
      email,
      password,
    };

    signup(userDetails);
    history.push("/profile");
  };

  const login = () => {
    const userDetails = {
      email,
      password,
    };

    signin(userDetails);
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
