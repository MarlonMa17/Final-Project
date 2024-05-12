import React, { useState } from "react";
import Navbutton from "./Navbutton";
import SignIn from "./SignIn/SignIn";

export default function Navbar() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  return (
    <div>
      <Navbutton onClick={handleSignInClick} name="Sign In" />
      {showSignIn && <SignIn />}
    </div>
  );
}
