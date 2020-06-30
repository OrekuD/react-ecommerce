import React, { useState } from "react";
import { SignIn, SignUp } from "./index";

const Auth = () => {
  const [signInScreen, setSignInScreen] = useState(true);

  if (signInScreen) {
    return <SignIn setSignInScreen={setSignInScreen} />;
  }

  return <SignUp setSignInScreen={setSignInScreen} />;
};

export default Auth;
